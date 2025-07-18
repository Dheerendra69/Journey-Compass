import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useMatch, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks";

const validatePassword = (password) => {
  const errors = [];
  if (password.length < 6 || password.length > 12) {
    errors.push("Password must be between 6 and 12 characters.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must include at least one lowercase letter.");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must include at least one digit.");
  }
  if (!/[!@#$%^&*(),.?\":{}|<>]/.test(password)) {
    errors.push("Password must include at least one special character.");
  }
  return errors.length > 0 ? errors : null;
};

function Auth() {
  const isRegister = useMatch("/register");
  const navigate = useNavigate();
  const { login } = useAuth();
  const loginInitialValues = { email: "", password: "" };

  const onSubmit = async (values, actions) => {
    try {
      const { data } = await axios.post(
        `https://blogging-website-x3hj.onrender.com/api/users${
          isRegister ? "" : "/login"
        }`,
        { user: values }
      );
      login(data.user);
      navigate("/");
    } catch (error) {
      console.error("Error while onSubmit in Auth.jsx: ", error);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <div className="card shadow p-4 p-md-5">
          <h1 className="text-center mb-4 fw-bold">
            Sign {isRegister ? "up" : "in"}
          </h1>

          <p className="text-center mb-4">
            <Link to={isRegister ? "/login" : "/register"}>
              {isRegister ? "Have" : "Need"} an account?
            </Link>
          </p>

          <Formik
            onSubmit={onSubmit}
            initialValues={
              isRegister
                ? { ...loginInitialValues, username: "" }
                : loginInitialValues
            }
          >
            {() => (
              <Form className="d-flex flex-column gap-3">
                {isRegister && (
                  <div>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>
                )}
                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-primary w-100">
                    Sign {isRegister ? "up" : "in"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Auth;
