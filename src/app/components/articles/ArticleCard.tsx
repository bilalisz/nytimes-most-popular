import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/app/types/articles";
import { formatDate } from "@/app/utils/functions";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const imageUrl =
    article.media?.[0]?.["media-metadata"]?.[0]?.url || "/images/no-photo.jpg";
  return (
    <Link href={`/articles/${article.id}`} passHref>
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer h-full">
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm mb-2 font-semibold">
            {article.byline}
          </p>
          <p className="text-gray-700 text-sm line-clamp-3">
            {article.abstract}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            {formatDate(article.published_date)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
