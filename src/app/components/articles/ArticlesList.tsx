"use client";
import React from "react";
import ArticleCard from "./ArticleCard";
import { Article } from "@/app/types/articles";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../shared/ErrorMessage";

interface ArticleListProps {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const ArticleList: React.FC<ArticleListProps> = (props) => {
  const { articles, loading, error } = props;

  if (loading) return <LoadingSpinner className="my-5" />;
  if (error) return <ErrorMessage message={error} className="mt-5" />;
  if (articles.length === 0)
    return <ErrorMessage message="No articles found" className="mt-5" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
