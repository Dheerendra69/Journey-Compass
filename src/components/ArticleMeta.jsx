import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

function ArticleMeta({ author, createdAt }) {
  const { authUser } = useAuth();
  const canUpdate = authUser?.username === author?.username;

  return (
    <div className="article-meta d-flex align-items-center flex-wrap gap-2 mb-3">
      <Link to={`/profile/${author?.username}`}>
        <img
          src={author?.image}
          alt={author?.username}
          className="rounded-circle border"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
      </Link>
      <div>
        <Link
          to={`/profile/${author?.username}`}
          className="d-block text-decoration-none fw-bold text-dark"
        >
          {author?.username}
        </Link>
        <span className="text-muted small">
          {new Date(createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
}

export default ArticleMeta;
