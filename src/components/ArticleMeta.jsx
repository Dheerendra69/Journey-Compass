import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks';

function ArticleMeta({ author, createdAt }) {
  const { authUser } = useAuth();
  const canUpdate = authUser?.username === author?.username;

  return (
    <div className="article-meta d-flex align-items-center flex-wrap mb-3">
      <Link to={`/profile/${author?.username}`} className="me-3">
        <img
          src={author?.image}
          alt={author?.username}
          className="rounded-circle"
          style={{ width: '40px', height: '40px', objectFit: 'cover' }}
        />
      </Link>

      <div className="info">
        <Link
          to={`/profile/${author?.username}`}
          className="author d-block text-decoration-none fw-bold"
        >
          {author?.username}
        </Link>
        <span className="date text-muted small">{new Date(createdAt).toDateString()}</span>
      </div>

    </div>
  );
}

export default ArticleMeta;
