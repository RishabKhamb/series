import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import validator from "validator";

const Signup = () => {
  const history = useHistory();
  // const [data, setData] = useState([]);
  const [signupInput, setSignupInput] = useState({
    signupName: "",
    signupMail: "",
    signupPassword: "",
  });
  const [nameErr, setNameErr] = useState(false);
  const [mailErr, setMailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const signupNameHandler = (e) => {
    setSignupInput((prev) => {
      return { ...prev, signupName: e.target.value };
    });
  };

  const signupMailHandler = (e) => {
    setSignupInput((prev) => {
      return { ...prev, signupMail: e.target.value };
    });
  };

  const signupPasswordHandler = (e) => {
    setSignupInput((prev) => {
      return { ...prev, signupPassword: e.target.value };
    });
  };

  const submitSignupHandler = (event) => {
    event.preventDefault();
    let validName = signupInput.signupName;
    let validMail = signupInput.signupMail;
    let validPass = signupInput.signupPassword;
    if (validName.trim().length <= 2) {
      setNameErr(true);
      return;
    } else if (!validator.isEmail(validMail)) {
      setMailErr(true);
      return;
    } else if (validPass.trim().length < 6) {
      setPassErr(true);
      return;
    } else {
      alert("Sign up form added!");
      history.push("/");
      let users = JSON.parse(localStorage.getItem("signup") || "[]");
      let user = {
        name: signupInput.signupName,
        mail: signupInput.signupMail,
        pas: signupInput.signupPassword,
      };
      users.push(user);
      localStorage.setItem("signup", JSON.stringify(users));
    }
    setSignupInput({
      signupName: "",
      signupMail: "",
      signupPassword: "",
    });
    setNameErr(false);
    setMailErr(false);
    setPassErr(false);
  };

  return (
    <div className="container cent" style={{ marginTop: "18vh" }}>
      <div className="row">
        <h1 className="col-lg-12 text-center mb-4">Sign-up form</h1>
      </div>
      <div className="row justify-content-center ">
        <div className="col-lg-6 box ">
          <Form onSubmit={submitSignupHandler}>
            <Form.Group className="mb-3 col-lg-12 " controlId="formName">
              <Form.Label className="fs-3">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={signupNameHandler}
                value={signupInput.signupName}
              />
              {nameErr && <p>Please enter a valid name</p>}
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12 " controlId="formEmail">
              <Form.Label className="fs-3">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={signupMailHandler}
                value={signupInput.signupMail}
              />
              {mailErr && <p>Please enter a valid mail id</p>}
            </Form.Group>
            <Form.Group className="mb-3 col-lg-12" controlId="formPassword">
              <Form.Label className="fs-3">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={signupPasswordHandler}
                value={signupInput.signupPassword}
              />
              {passErr && <p>Please enter a valid password</p>}
            </Form.Group>
            <Button variant="dark" type="submit">
              Submit
            </Button>
            <p className="my-2">
              Already have an account? <Link to="/">Sign in</Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
