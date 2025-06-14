import { Formik, Field, Form } from "formik";
import React from "react";
import { useAuth, useUserQuery } from "../hooks";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import "../css/Settings.css";

function Settings() {
  const { logout } = useAuth();
  const { isCurrentUserLoading, currentUser, currentUserError } =
    useUserQuery();

  const queryClient = useQueryClient();

  const navigate = useNavigate();

  async function onSubmit(values, { setErrors }) {
    try {
      const { data } = await axios.put(
        `https://blogging-website-x3hj.onrender.com/api/user`,
        {
          user: values,
        }
      );

      const updatedUsername = data?.user?.username;

      logout(data?.user);

      queryClient.invalidateQueries(`/profiles/${updatedUsername}`);
      queryClient.invalidateQueries(`/user`);

      navigate(`/profile/${updatedUsername}`);
    } catch (error) {
      const { status, data } = error.response;

      if (status === 422) {
        setErrors(data.errors);
      }
    }
  }
  return (
    <div className="settings-page">
      <div className="settings-card">
        <h1>Update Profile</h1>
        <Formik
          onSubmit={onSubmit}
          initialValues={currentUser?.user}
          enableReinitialize
        >
          {({ isSubmitting }) => (
            <>
              <Form>
                <fieldset disabled={isSubmitting}>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="image"
                      placeholder="URL of profile pic"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <Field
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      as="textarea"
                      name="bio"
                      rows={4}
                      placeholder="Short bio about you"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Update Settings
                  </button>
                </fieldset>
              </Form>
              <hr />
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                }}
                type="button"
                className="btn btn-outline-danger"
              >
                Or click here to logout.
              </button>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Settings;
