import React from "react";
import { isEmpty, isNil } from "lodash-es";
import { useArticlesQuery } from "../hooks";
import ArticlePreview from "./ArticlePreview";
import "../css/ArticleList.css";

function ArticleList() {
  const { articles } = useArticlesQuery();

  if (isEmpty(articles))
    return <p className="article-preview">No articles are here... yet.</p>;

  return (
    <div className="ArticleList">
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
