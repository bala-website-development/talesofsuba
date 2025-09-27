import Layout from "@/components/Layout/Layout";
import LoginWrapper from "@/components/LoginWrapper/LoginWrapper";
import Style from "@/components/Reuseable/Style";
import React from "react";

const Register = () => {
  return (
    <Layout pageTitle="Register">
      <Style />
      <LoginWrapper register />
    </Layout>
  );
};

export default Register;
