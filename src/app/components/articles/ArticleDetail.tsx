"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Article } from "@/app/types/articles";
import LoadingSpinner from "../shared/LoadingSpinner";
import ErrorMessage from "../shared/ErrorMessage";
import BackButton from "../shared/BackButton";
import SocialShare from "../shared/SocialShare";
import AppFooter from "../shared/AppFooter";
import AppHeader from "../shared/AppHeader";
import { useArticles } from "@/app/hooks/useArticles";
import { RightArrow } from "../icons/svgs";
import { formatDate } from "@/app/utils/functions";

const ArticleDetailPage = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams();
  const period = Number(localStorage.getItem("period"));
  const { articles, error, loading } = useArticles(period);

  useEffect(() => {
    if (articles.length) {
      const foundArticle = articles.find((article) => {
        return article.id === Number(id);
      });
      setArticle(foundArticle || null);
    }
  }, [articles, id]);

  if (loading) return <LoadingSpinner className="min-h-screen" />;
  if (error) return <ErrorMessage message={error} className="min-h-screen" />;
  if (!article)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-2xl">Article not found</p>
      </div>
    );

  const imageUrl =
    article.media?.[0]?.["media-metadata"]?.[2]?.url || "/placeholder.jpg";
  const publishedDate = formatDate(article.published_date);

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between my-4">
          <BackButton route={"/articles"} />
          <SocialShare url={article.url} title={article.title} />
        </div>
        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <span className="text-sm font-medium text-blue-600">
                  {article.section || "News"}
                </span>
                <p className="text-gray-500 text-sm mt-1">
                  Published on {publishedDate}
                </p>
              </div>
              <p className="text-gray-700 mt-2 md:mt-0">
                {article.byline || "By New York Times"}
              </p>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>

            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {/* add abstract multiple time because we don't have the details to render the detail content */}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
                {article.abstract}
              </p>

              <div className="border-t border-gray-200 pt-6">
                <button
                  onClick={() => window.open(article.url, "_blank")}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-500 hover:bg-blue-700 hover:text-white transition-colors"
                >
                  Read Full Article on NYTimes.com
                  <RightArrow />
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <AppFooter />
    </div>
  );
};

export default ArticleDetailPage;
