import React, { useEffect, useState } from "react";
import { ArticleComments, ArticleMeta } from "../components";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Article.css";

function Article() {
  const [article, setArticle] = useState({});
  const { slug } = useParams();
  const token = localStorage.getItem("jwtToken");

  const getArticleBySlug = async (slug) => {
    const { data } = await axios.get(
      `https://blogging-website-x3hj.onrender.com/api/articles/${slug}`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );
    setArticle(data.article);
  };

  useEffect(() => {
    if (!slug) return;
    getArticleBySlug(slug);
  }, [slug]);

  return (
    <div className="article-page">
      <div className="banner bg-primary text-white py-5 hero-section">
        <div className="container text-center">
          <h1 className="display-4">{article?.title}</h1>
          <ArticleMeta
            author={article?.author}
            createdAt={article?.createdAt}
          />
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-11 col-lg-9">
            <div className="p-4 rounded-4 shadow-sm bg-dark text-white mb-5">
              <p className="lead mb-3">{article?.description}</p>
              <p style={{ lineHeight: "1.8" }}>{article?.body}</p>
            </div>

            <div className="mb-5">
              <ArticleMeta
                author={article?.author}
                createdAt={article?.createdAt}
              />
            </div>

            <div className="row justify-content-center">
              <div className="col-12 col-md-11 col-lg-10">
                <div className="card shadow-sm border-0 p-3">
                  <ArticleComments slug={slug} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
