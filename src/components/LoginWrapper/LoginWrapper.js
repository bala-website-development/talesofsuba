import { loginWrapper } from "@/data/loginWrapper";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import config from "../../config.json";
import secureLocalStorage from "react-secure-storage";
//import bcrypt from "bcrypt";

const { bg, logo, logoTitle, year, author, inputs, forgotText } = loginWrapper;

const LoginWrapper = ({ register = false, forgot = false }) => {
  const newInputs = inputs.slice(register ? 0 : 1, register ? undefined : forgot ? 2 : 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    newInputs.forEach(({ name }) => (data[name] = formData.get(name)));
    // console.log(data);
    if (data.text === "pappu" && data.password === "pappu") {
      secureLocalStorage.setItem("subausername", data.text);
      secureLocalStorage.setItem("subapassword", data.password);
      window.location.href = "/adminhome";
    } else {
      alert("Incorrect username / Password");
    }
  };

  return (
    <section className="login-wrapper">
      <div className="login-bg" style={{ backgroundImage: `url(${bg.src})` }}></div>
      <div className="login-content">
        <div className="login-content__inner">
          <div className="logo-box">
            <div className="logo text-center">
              <Link href="/">
                <a title={logoTitle}>
                  <Image src={config.logo1} width={134} id="dLogo" className="main-logo" alt={logoTitle} title={logoTitle} />
                </a>
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <Row>
              {newInputs.map(({ name, type, placeholder, required }) => (
                <Col key={name} md={12}>
                  <input type={type} name={name} placeholder={placeholder} required={required} />
                </Col>
              ))}
            </Row>
            {/* {!register && <p className="text-right">{forgot ? <TextSplit text={forgotText} /> : <Link href="/forgot-password">Forgot your password?</Link>}</p>} */}
            <button type="submit" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">{register ? "Register Now" : forgot ? "Reset Password" : "Sign in"}</span>
            </button>
          </form>
          {/* <p className="signup-link">
            {register ? "Already have an Account?" : "New to linoor?"} <Link href={register ? "/login" : "/register"}>{register ? "Login Here" : "Signup"}</Link>
          </p> */}
          <p className="copyright-text">
            © copyright {year} by {author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginWrapper;
