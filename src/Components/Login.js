import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import validator from "validator";

const Login = () => {
  const history = useHistory();
  const [loginInput, setLoginInput] = useState({
    loginMail: "",
    loginPassword: "",
  });

  const [mailErr, setMailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const loginMailHandler = (e) => {
    setLoginInput((prev) => {
      return { ...prev, loginMail: e.target.value };
    });
  };

  const loginPasswordHandler = (e) => {
    setLoginInput((prev) => {
      return { ...prev, loginPassword: e.target.value };
    });
  };

  const submitLoginHandler = (event) => {
    const getDetail = localStorage.getItem("signup");
    // console.log(getDetail);
    event.preventDefault();
    let validMail = loginInput.loginMail;
    let validPass = loginInput.loginPassword;

    if (!validator.isEmail(validMail)) {
      setMailErr(true);
      return;
    } else if (validPass.trim().length < 6) {
      setPassErr(true);
      return;
    } else if (!getDetail) {
      alert("Please sign up first.");
    } else {
      if (getDetail && getDetail.length) {
        const userData = JSON.parse(getDetail);
        console.log(userData);
        const userlogin = userData.filter((item) => {
          return (
            item.mail === loginInput.loginMail &&
            item.pas === loginInput.loginPassword
          );
        });
        if (userlogin.length === 0) {
          console.log(userlogin.length);
          alert("Please check your id or password");
        } else {
          alert("successful login");
          localStorage.setItem("userlogin", JSON.stringify(userlogin));
          history.push("/welcome");
        }
      }
    }
    setLoginInput({ loginMail: "", loginPassword: "" });
  };
  return (
    <div className="container cent">
      <div className="row">
        <h1 className="col-lg-12 text-center">Login Form</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 box ">
          <Form onSubmit={submitLoginHandler}>
            <Form.Group className="mb-3 col-lg-12 " controlId="formEmail">
              <Form.Label className="fs-3">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={loginMailHandler}
                value={loginInput.loginMail}
              />
              {mailErr && <p>Please enter a valid mail id</p>}
            </Form.Group>

            <Form.Group className="mb-3 col-lg-12" controlId="formPassword">
              <Form.Label className="fs-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={loginPasswordHandler}
                value={loginInput.loginPassword}
              />
              {passErr && <p>Please enter a valid password</p>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <p className="my-2">
              Don't have an account? <Link to="/signup">Create Account</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
