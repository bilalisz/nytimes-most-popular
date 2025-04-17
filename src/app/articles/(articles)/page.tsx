"use client";
import { useState } from "react";
import AppHeader from "@/app/components/shared/AppHeader";
import ArticleList from "@/app/components/articles/ArticlesList";
import PeriodSelector from "@/app/components/articles/PeriodSelector";
import AppFooter from "@/app/components/shared/AppFooter";
import { useArticles } from "@/app/hooks/useArticles";

export default function Page() {
  const [period, setPeriod] = useState<number>(1);
  const { articles, loading, error } = useArticles(period);
  return (
    <>
      <main className="min-h-screen">
        <AppHeader />
        <div className="container mx-auto px-4 py-8">
          <PeriodSelector
            selectedPeriod={period}
            onPeriodChange={setPeriod}
            className=" md:w-64 w-full"
          />
          <ArticleList articles={articles} loading={loading} error={error} />
        </div>
      </main>
      <AppFooter />
    </>
  );
}
