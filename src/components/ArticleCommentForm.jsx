import { Field, Formik, Form } from "formik";
import React from "react";
import useCreateComment from "../hooks/useCreateComment";
import { useParams } from "react-router-dom";

function ArticleCommentForm() {
  const { slug } = useParams();
  const { isCreatingComment, createComment } = useCreateComment();

  async function onSubmit({ body }, { resetForm }) {
    // Send the data to create comment API
    createComment({
      values: {
        comment: {
          body,
        },
      },
      slug,
    });
    resetForm();
  }

  return (
    <Formik onSubmit={onSubmit} initialValues={{ body: "" }}>
      {({ isSubmitting }) => (
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 mb-4">
            <Form className="card shadow-sm">
              <div className="card-body">
                <Field
                  as="textarea"
                  required
                  name="body"
                  placeholder="Write a comment..."
                  className="form-control form-control-lg mb-3"
                  rows="3"
                />
              </div>

              <div className="card-footer d-flex justify-content-end">
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="btn btn-sm btn-primary"
                >
                  {isCreatingComment ? "Posting..." : "Post Comment"}
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default ArticleCommentForm;
