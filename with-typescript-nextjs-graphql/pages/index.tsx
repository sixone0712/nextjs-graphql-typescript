import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useLoginMutation } from "../generated/apolloComponents";

const IndexPage = () => {
  console.log("IndexPage");

  const [loginMutation, { data, loading, error }] = useLoginMutation();
  // {
  //   variables: {
  //      email: "test@test.com",
  //      password: "1234"
  //  },
  // }

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <button
        onClick={async () => {
          const response = await loginMutation({
            variables: {
              email: "test@test.com",
              password: "1234",
            },
          });
          console.log(response);
        }}
      >
        call login mutation
      </button>
      {/* <LoginComponent>
        {mutate => (
          <button
            onClick={async () => {
              const response = await mutate({
                variables: { email: "test@test.com", password: "password" }
              });

              console.log(response);
            }}
          >
            call login mutation
          </button>
        )}
      </LoginComponent> */}
    </Layout>
  );
};

export default IndexPage;
