import React from "react";
import { Link } from "react-router-dom";
import "../css/ArticlePreview.css";

function ArticlePreview({ article }) {
  const { slug, author, createdAt, favoritesCount, title, body, tagList } =
    article;

  return (
    <div className="article-card">
      <div className="article-card-body">
        <div className="d-flex align-items-center mb-3">
          <Link to={`/profile/${author?.username}`} className="me-3">
            <img
              src={author?.image}
              alt={author?.username}
              className="article-avatar"
            />
          </Link>
          <div>
            <Link
              to={`/profile/${author?.username}`}
              className="article-author-name"
            >
              {author?.username}
            </Link>
            <div className="article-date">
              {new Date(createdAt).toDateString()}
            </div>
          </div>
        </div>

        <Link to={`/article/${slug}`} className="text-decoration-none">
          <h5 className="article-title">{title}</h5>
          <p className="article-body">
            {body.length > 180 ? body.slice(0, 180) + "..." : body}
          </p>
          <span className="read-more">Read more →</span>
        </Link>

        <div className="article-tags mt-3">
          {tagList.map((tag) => (
            <span key={tag} className="article-tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlePreview;
