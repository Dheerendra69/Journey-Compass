import { Form, Formik, Field } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FormErrors, TagsInput } from "../components";
// import { useArticleQuery } from "../hooks";
import useCreateArticle from "../hooks/useCreateArticle";
import "../css/Editor.css";

function Editor() {
  const navigate = useNavigate();
  //   const articleQuery = useArticleQuery();
  const queryClient = useQueryClient();
  //   const article = articleQuery?.data?.article || {};
  //   const { slug } = article;

  const { isCreating, createArticle } = useCreateArticle();

  async function onSubmit(values, { setErrors }) {
    try {
      //   const { data } = await axios[slug ? "put" : "post"](
      //     `/articles${slug ? `/${slug}` : ""}`,
      //     { article: values }
      //   );
      createArticle({ values });

      if (slug) {
        queryClient.invalidateQueries(`/articles/${slug}`);
      } else {
        queryClient.invalidateQueries("/articles");
      }
    } catch (error) {
      console.log("Error in editor.jsx", error);
      // const { status, data } = error.response;

      // if (status === 422) {
      //   setErrors(data.errors);
      // }
    }
  }

  return (
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <Formik
              onSubmit={onSubmit}
              initialValues={{
                // title: article?.title || '',
                // description: article?.description || '',
                // body: article?.body || '',
                tagList: [],
              }}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <>
                  <FormErrors />
                  <Form>
                    <fieldset disabled={isSubmitting}>
                      <fieldset className="form-group">
                        <Field
                          name="title"
                          type="text"
                          className="form-control form-control-lg"
                          placeholder="Article Title"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="description"
                          type="text"
                          className="form-control"
                          placeholder="What's this article about?"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field
                          name="body"
                          as="textarea"
                          className="form-control"
                          rows={8}
                          placeholder="Write your article (in markdown)"
                        />
                      </fieldset>
                      <fieldset className="form-group">
                        <Field name="tagList" component={TagsInput} />
                      </fieldset>
                      <button
                        className="btn btn-lg pull-xs-right btn-primary"
                        type="submit"
                      >
                        Publish Article
                      </button>
                    </fieldset>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
