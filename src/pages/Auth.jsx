import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useMatch, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../hooks";
import "../css/Signup.css";
import Footer from "./Footer";
// import Email from "emailjs-com";

// const emailToOwner =
//   "A new user has signed up on your website. Please check the user details and ensure their account is activated. Welcome them aboard!";

// const signupEmailToUser =
//   "Welcome to our website! We're excited to have you on board. Explore the features and start enjoying all the benefits. Happy browsing!";
// const loginEmailToUser =
//   "Hi, someone just signed up using your referral link or account.";

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

// const sendEmail = (subject, message, recipientEmail) => {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "dheerendrapratapsingh1509@gmail.com",
//     Password: "ECF23215F819034DB816FBC02BB5CCC245A9",
//     To: recipientEmail,
//     From: "dheerendrapratapsingh1509@gmail.com",
//     Subject: subject,
//     Body: message,
//     UserID: "_QDbh7gF0wFzbZ1-4",
//   }).then((message) => alert(message));
// };

function Auth() {
  const isRegister = useMatch("/register");
  const navigate = useNavigate();
  const { login } = useAuth();
  const loginInitialValues = { email: "", password: "" };

  const onSubmit = async (values, actions) => {
    const passwordErrors = validatePassword(values.password);
    if (passwordErrors) {
      alert(passwordErrors.join(" "));
      return;
    }

    try {
      const { data } = await axios.post(
        `https://blogging-website-backend-bzho.onrender.com/api/users${
          isRegister ? "" : "/login"
        }`,
        { user: values }
      );

      // if (isRegister) {
      //   sendEmail(
      //     "New User Signed Up",
      //     emailToOwner,
      //     "uplakshyakumar872@gmail.com"
      //   );
      //   sendEmail(
      //     "Welcome On Board",
      //     signupEmailToUser,
      //     "uplakshyakumar872@gmail.com"
      //   );
      // } else {
      //   sendEmail(
      //     "New Sign-in Detected",
      //     loginEmailToUser,
      //     "uplakshyakumar872@gmail.com"
      //   );
      // }

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
      <Footer />
    </div>
  );
}

export default Auth;
