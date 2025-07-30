import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/ProfilePage.css";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) {
      console.log("token not found");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/profile", {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        setUser(res.data.user);
        setArticles(res.data.articles);
      } catch (err) {
        console.error("Failed to fetch profile", err);
        // navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [token, navigate]);

  if (loading)
    return <div className="text-center mt-5">Loading profile...</div>;

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-12 col-md-6 mx-auto">
          <div className="card shadow-sm p-4">
            <h2 className="mb-3 text-center">User Profile</h2>
            <p>
              <strong>Username:</strong> {user?.username}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>
        </div>

        <div className="col-12 col-md-8 mx-auto">
          <div className="card shadow-sm p-4">
            <h3 className="mb-3 text-center">Your Articles</h3>
            {articles.length === 0 ? (
              <p className="text-muted text-center">No articles found.</p>
            ) : (
              <ul className="list-group">
                {articles.map((article) => (
                  <li
                    key={article.slug}
                    className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <span className="me-2 mb-2 mb-sm-0">{article.title}</span>
                    <a
                      href={`/article/${article.slug}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      View
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
