import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useMatch, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks";
import "../css/Signup.css";

const validatePassword = (password) => {
  const errors = [];
  if (password.length < 6 || password.length > 12) {
    errors.push("Password must be between 6 and 12 characters.\n");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter.\n");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must include at least one lowercase letter.\n");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must include at least one digit.\n");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must include at least one special character.\n");
  }
  return errors.length > 0 ? errors : null;
};

function Auth() {
  const isRegister = useMatch("/register");
  const navigate = useNavigate();
  const { login } = useAuth();
  const loginInitialValues = { email: "", password: "" };

  const onSubmit = async (values, actions) => {
    // const passwordErrors = validatePassword(values.password);
    // if (passwordErrors) {
    //   alert(passwordErrors.join(" "));
    //   return;
    // }
    // commented the validation part
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
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign {isRegister ? "up" : "in"}</h1>
            <p className="text-xs-center">
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
                <Form>
                  {isRegister && (
                    <fieldset className="form-group">
                      <Field
                        type="text"
                        name="username"
                        placeholder="Your Name"
                        className="form-control form-control-lg"
                      />
                    </fieldset>
                  )}
                  <fieldset className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control form-control-lg"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control form-control-lg"
                    />
                  </fieldset>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary pull-xs-right"
                  >
                    Sign {isRegister ? "up" : "in"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
