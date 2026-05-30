import axios from "axios";
import { useAuth } from "../hooks";
import { Link } from "react-router-dom";

function ArticleComment({ comment, articleSlug }) {
  const { author, body, createdAt, id } = comment;
  const { authUser } = useAuth();

  const canDelete = author?.username === authUser?.username;

  const token = localStorage.getItem("jwtToken");

  const handleDelete = async () => {
    const parsedJwt = JSON.parse(atob(token));
    if (Date.now() > parsedJwt.expiry) {
      console.log("Token expired");
    }
    try {
      await axios.delete(
        `https://blogging-website-x3hj.onrender.com/api/articles/${articleSlug}/comments/${id}`,
        {
          headers: {
            Authorization: `Token ${parsedJwt.token}`,
          },
        },
      );
    } catch (err) {
      console.error("Failed to delete comment:", err);
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <p className="card-text">{body}</p>
      </div>

      {id && (
        <div className="card-footer d-flex justify-content-between align-items-center flex-wrap">
          <div className="d-flex align-items-center flex-wrap gap-2">
            <Link
              to={`/profile/${author.username}`}
              className="text-decoration-none fw-medium colored-text"
            >
              @{author.username}
            </Link>
            <span className="text-muted small">
              {new Date(createdAt).toDateString()}
            </span>
          </div>
          {canDelete && (
            <button
              className="btn btn-sm btn-outline-danger mt-2 mt-md-0"
              onClick={handleDelete}
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default ArticleComment;
