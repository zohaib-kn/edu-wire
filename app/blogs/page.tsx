import React from "react";
import Link from "next/link";
import { getLiveBlogs } from "@/lib/blog";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Guidance | Edu-Wire Overseas Consultant Blog",
  description: "Stay updated with recent news, university scholarship updates, visa guidelines, and admission requirements for overseas studies.",
};

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : 1;
  const { blogs, totalCount, currentPage, totalPages } = await getLiveBlogs(page);

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1.5 rounded-full mb-4 inline-block">
            Edu-Wire Blog
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Insights &amp; Guidance
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Expert articles and student guides on admission requirements, exams, and scholarship waivers.
          </p>
        </div>
      </section>

      {/* Blogs Listing */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <BookOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-slate-700">No blog posts found</h2>
            <p className="text-slate-400 text-sm mt-1">Please check back later or refresh the page.</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <p className="text-sm font-medium text-slate-500">
                Showing <strong className="text-slate-800">{blogs.length}</strong> of <strong className="text-slate-800">{totalCount}</strong> articles
              </p>
              <span className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                Page {currentPage} of {totalPages}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <article
                  key={blog.slug}
                  className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Image */}
                    {blog.image && (
                      <Link href={`/blogs/${blog.slug}`} className="block overflow-hidden aspect-video bg-slate-100">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </Link>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{blog.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                        <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                        {blog.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:text-primary-dark hover:gap-2 transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <Link
                    key={p}
                    href={`/blogs?page=${p}`}
                    className={`h-10 min-w-10 px-3 py-1 flex items-center justify-center rounded-lg border text-sm font-semibold transition-all ${
                      currentPage === p
                        ? "bg-primary border-primary text-white"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {p}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
