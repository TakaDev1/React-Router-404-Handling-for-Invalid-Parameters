import React from "react";
import { useParams } from "react-router";
import Articles from "../data/ArticlesData";
import NotFound from "./NotFound";
const Article = () => {
  const { id } = useParams<"id">();

  const articleId = Number(id);
  const subjectArticle = Articles[articleId];

  if (!subjectArticle) return <NotFound />;

  return (
    <div>
      <p>Title: {subjectArticle.title}</p>
    </div>
  );
};

export default Article;
