import React, { useEffect, useState } from "react";
import { ArticleComments, ArticleMeta } from "../components";
import { useArticleQuery } from "../hooks";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Article.css";
import Footer from "./Footer";
function Article() {
  const [article, setArticle] = useState([]);
  const { slug } = useParams();

  const getArticleBySlug = async (slug) => {
    const { data } = await axios.get(
      `https://blogging-website-backend-bzho.onrender.com/api/articles/${slug}`
    );

    setArticle(data.article);
  };
  useEffect(() => {
    if (!slug) return;
    getArticleBySlug(slug);
  }, [slug]);

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{article?.title}</h1>
          <ArticleMeta
            author={article?.author}
            createdAt={article?.createdAt}
          />
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{article?.description}</p>
            <p>{article?.body}</p>
          </div>
        </div>
        <hr />
        <div className="article-actions">
          <ArticleMeta
            author={article?.author}
            createdAt={article?.createdAt}
          />
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offeset-md-2">
            <ArticleComments />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Article;
