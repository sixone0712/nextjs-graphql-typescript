import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputFiled } from "../components/fields/InputField";

export default function Register() {
  return (
    <Layout title="Register page">
      <Formik
        onSubmit={(data) => {
          console.log("data", data);
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
