import Layout from "@/components/Layout/Layout";
import LoginWrapper from "@/components/LoginWrapper/LoginWrapper";
import Style from "@/components/Reuseable/Style";
import React from "react";

const Login = () => {
  return (
    <Layout pageTitle="Login">
      <Style />
      <LoginWrapper />
    </Layout>
  );
};

export default Login;
