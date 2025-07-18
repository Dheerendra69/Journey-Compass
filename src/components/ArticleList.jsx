import React from "react";
import { isEmpty } from "lodash-es";
import { useArticlesQuery } from "../hooks";
import ArticlePreview from "./ArticlePreview";
import "../css/ArticleList.css";

function ArticleList() {
  const { articles } = useArticlesQuery();

  if (isEmpty(articles)) {
    return (
      <div className="text-center py-4 text-muted">
        <p>Login to see the articles...</p>
      </div>
    );
  }

  return (
    <div className="row gy-4">
      {articles.map((article) => (
        <div key={article.slug} className="col-12">
          <ArticlePreview article={article} />
        </div>
      ))}
    </div>
  );
}

export default ArticleList;
