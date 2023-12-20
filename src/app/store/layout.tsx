"use client";

import Categories from "@/components/store/Categories";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";
import Loading from "../loading";

const StoreLayout = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();

  const catFilter =
    params.filter === "all"
      ? ""
      : params.filter
      ? `&category=${params.filter}`
      : "";

  return (
    <main className="overflow-hidden">
      <Suspense fallback={<Loading />}>
        <Categories />
        <section className="grid lg:grid-cols-[300px_1fr] md:grid-cols-[250px_1fr] relative border-t">
          {children}
        </section>
      </Suspense>
    </main>
  );
};

export default StoreLayout;
