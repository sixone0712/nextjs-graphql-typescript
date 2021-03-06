import App from "next/app";
import React from "react";
// import { ApolloProvider } from "react-apollo";
// import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloProvider } from "@apollo/client";
import withApollo from "../lib/withApollo";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
