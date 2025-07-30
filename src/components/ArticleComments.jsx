import React from "react";
import { useArticleCommentsQuery, useAuth } from "../hooks";
import { Link } from "react-router-dom";
import ArticleComment from "./ArticleComment";
import ArticleCommentForm from "./ArticleCommentForm";

function ArticleComments({ slug }) {
  const { isAuth } = useAuth();
  const articleSlug = slug;

  const { isArticleCommentsLoading, articleComments, articleCommentsError } =
    useArticleCommentsQuery();

  if (!isAuth) {
    return (
      <div className="container mt-4">
        <p className="text-center">
          <Link to="/login" className="text-primary text-decoration-none me-2">
            Sign in
          </Link>
          or
          <Link
            to="/register"
            className="text-primary text-decoration-none ms-2"
          >
            Sign up
          </Link>
          to add a comment on this article.
        </p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <ArticleCommentForm />

          {isArticleCommentsLoading && (
            <p className="text-center my-3">Loading comments...</p>
          )}

          {articleCommentsError && (
            <p className="text-danger text-center my-3">
              Failed to load comments.
            </p>
          )}

          {articleComments?.comments?.length === 0 && (
            <p className="text-center text-muted my-3">No comments yet.</p>
          )}

          {articleComments?.comments?.map((comment) => (
            <ArticleComment key={comment.id} comment={comment} articleSlug={articleSlug} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleComments;
