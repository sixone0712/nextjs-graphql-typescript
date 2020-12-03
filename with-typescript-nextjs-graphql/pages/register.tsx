import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputFiled } from "../components/fields/InputField";
import {
  useRegisterMutation,
  RegisterInput,
} from "../generated/apolloComponents";

export default function Register() {
  const [registerMutation, { data, loading, error }] = useRegisterMutation();

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error?.message);

  return (
    <Layout title="Register page">
      <Formik
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (inputForm: RegisterInput, { setErrors }) => {
          try {
            const response = await registerMutation({
              variables: {
                data: inputForm,
              },
            });
          } catch (e) {
            console.error("error", Object.keys(e));
            const errors: { [key: string]: string } = {};
            e.graphQLErrors[0].extensions.exception.validationErrors.forEach(
              (validationErr: any) => {
                Object.values(validationErr.constraints).forEach(
                  (message: any) => {
                    errors[validationErr.property] = message;
                  },
                );
              },
            );
            console.log("errors", errors);
            setErrors(errors);
          }
        }}
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name={"email"} placeholder="email" component={InputFiled} />
            <Field
              name={"firstName"}
              placeholder="firstName"
              component={InputFiled}
            />
            <Field
              name={"lastName"}
              placeholder="lastName"
              component={InputFiled}
            />
            <Field
              name={"password"}
              type="password"
              placeholder="password"
              component={InputFiled}
            />
            <button type="submit">submit</button>
          </form>
        )}
      </Formik>
    </Layout>
  );
}
