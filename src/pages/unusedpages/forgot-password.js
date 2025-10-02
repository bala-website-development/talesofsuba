import Layout from "@/components/Layout/Layout";
import LoginWrapper from "@/components/LoginWrapper/LoginWrapper";
import Style from "@/components/Reuseable/Style";
import React from "react";

const ForgotPassword = () => {
  return (
    <Layout pageTitle="Forgot Password">
      <Style />
      <LoginWrapper forgot />
    </Layout>
  );
};

export default ForgotPassword;
