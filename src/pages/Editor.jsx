import { Form, Formik, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { FormErrors, TagsInput } from "../components";
import useCreateArticle from "../hooks/useCreateArticle";
import "../css/Editor.css";

function Editor() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isCreating, createArticle } = useCreateArticle();

  async function onSubmit(values, { setErrors }) {
    try {
      createArticle({ values });

      // Invalidate cache
      queryClient.invalidateQueries(["/articles"]);
    } catch (error) {
      console.log("Error in editor.jsx", error);
    }
  }

  return (
    <div className="editor-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="card shadow-sm p-4">
              <h2 className="mb-4 text-center">Write a New Article</h2>

              <Formik
                onSubmit={onSubmit}
                initialValues={{
                  title: "",
                  description: "",
                  body: "",
                  tagList: [],
                }}
                enableReinitialize
              >
                {({ isSubmitting }) => (
                  <>
                    <FormErrors />
                    <Form>
                      <fieldset disabled={isSubmitting}>
                        <div className="mb-3">
                          <Field
                            name="title"
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Article Title"
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            name="description"
                            type="text"
                            className="form-control"
                            placeholder="What's this article about?"
                          />
                        </div>

                        <div className="mb-3">
                          <Field
                            name="body"
                            as="textarea"
                            className="form-control"
                            rows={8}
                            placeholder="Write your article (in markdown)"
                          />
                        </div>

                        <div className="mb-4">
                          <Field name="tagList" component={TagsInput} />
                        </div>

                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                          >
                            Publish Article
                          </button>
                        </div>
                      </fieldset>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
