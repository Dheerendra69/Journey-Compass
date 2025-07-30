import axios from "axios";
import { useAuth } from "../hooks";
import { Link } from "react-router-dom";

function ArticleComment({ comment, articleSlug }) {
  const { author, body, createdAt, id } = comment;
  const { authUser } = useAuth();

  const canDelete = author?.username === authUser?.username;

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://your-api.com/api/articles/${articleSlug}/comments/${id}`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("jwtToken")}`,
          },
        }
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
