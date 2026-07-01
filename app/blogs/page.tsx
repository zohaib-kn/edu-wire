import React from "react";
import Link from "next/link";
import { getLiveBlogs } from "@/lib/blog";
import SectionHeader from "@/components/ui/SectionHeader";
import { Calendar, ArrowRight, BookOpen, GraduationCap, Award, Compass } from "lucide-react";
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

  // Feature the first post on page 1 only, styled like a boarding pass.
  const isFirstPage = currentPage === 1;
  const featured = isFirstPage ? blogs[0] : null;
  const restBlogs = isFirstPage ? blogs.slice(1) : blogs;

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Local keyframes for a gentle, dependency-free reveal on load */}
      <style>
        {`
          @keyframes ewFadeUp {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .ew-fade-up { animation: ewFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards; opacity: 0; }
        `}
      </style>

      {/* Hero Header — light, on-brand (primary color), no dark navy */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-white to-primary/[0.03]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-5">
            <GraduationCap className="h-3.5 w-3.5" />
            Edu-Wire Blog
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Insights &amp; Guidance
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
            Expert articles and student guides on admission requirements, exams, and scholarship waivers.
          </p>
        </div>

        {/* Quick-glance stats strip */}
        <div className="relative mx-auto max-w-3xl px-4 mt-10">
          <div className="grid grid-cols-3 divide-x divide-slate-100 rounded-2xl border border-slate-100 bg-white shadow-sm">
            <div className="px-4 py-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Articles</p>
              <p className="mt-1 text-lg font-bold text-primary">{totalCount}</p>
            </div>
            <div className="px-4 py-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Showing</p>
              <p className="mt-1 text-lg font-bold text-slate-800">{blogs.length}</p>
            </div>
            <div className="px-4 py-4 text-center">
              <p className="text-[10px] uppercase tracking-widest text-slate-400">Page</p>
              <p className="mt-1 text-lg font-bold text-slate-800">
                {currentPage}
                <span className="text-slate-400"> / {totalPages}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Listing */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 p-8 shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-primary/30 bg-primary/5">
              <BookOpen className="h-7 w-7 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-slate-700">No blog posts found</h2>
            <p className="text-slate-400 text-sm mt-1">Please check back later or refresh the page.</p>
          </div>
        ) : (
          <>
            {/* Featured post — split card with a perforated divider */}
            {featured && (
              <Link
                href={`/blogs/${featured.slug}`}
                className="ew-fade-up group relative mb-14 grid grid-cols-1 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl md:grid-cols-[1.1fr_1px_1fr]"
              >
                {/* Image side */}
                {featured.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 md:aspect-auto">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-sm">
                      <Award className="h-3 w-3" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Perforated divider (desktop only) */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 border-l-2 border-dashed border-slate-200" />
                  <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-slate-50" />
                  <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-slate-50" />
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <div className="mb-3 flex items-center gap-1.5 text-xs font-semibold text-primary">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{featured.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold leading-snug text-slate-900 group-hover:text-primary transition-colors sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-3 text-slate-500 leading-relaxed line-clamp-3">
                    {featured.description}
                  </p>
                  <span className="mt-6 inline-flex w-fit items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            )}

            {/* Remaining posts */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {restBlogs.map((blog, i) => (
                <article
                  key={blog.slug}
                  className="ew-fade-up group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                  style={{ animationDelay: `${Math.min(i, 6) * 70}ms` }}
                >
                  <div>
                    {/* Cover Image */}
                    {blog.image && (
                      <Link href={`/blogs/${blog.slug}`} className="relative block aspect-video overflow-hidden bg-slate-100">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Date badge */}
                        <span className="absolute -bottom-4 right-4 flex h-14 w-14 -rotate-6 flex-col items-center justify-center rounded-full border-2 border-white bg-primary text-center text-white shadow-md">
                          <Calendar className="h-3 w-3" />
                          <span className="mt-0.5 text-[9px] font-bold leading-none">{blog.date}</span>
                        </span>
                      </Link>
                    )}

                    <div className="p-6 pt-7">
                      <h3 className="mb-2 text-lg font-bold leading-snug text-slate-900 line-clamp-2">
                        <Link href={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-500 line-clamp-3">
                        {blog.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 hover:text-primary-dark transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-14 flex flex-col items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-400">
                  <Compass className="h-3.5 w-3.5 text-primary" />
                  Explore more insights
                </div>
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p, idx, arr) => (
                    <React.Fragment key={p}>
                      <Link
                        href={`/blogs?page=${p}`}
                        className={`flex h-10 min-w-10 items-center justify-center rounded-full border px-3 py-1 text-sm font-semibold transition-all ${
                          currentPage === p
                            ? "border-primary bg-primary text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-600 hover:border-primary/40 hover:bg-slate-50"
                        }`}
                      >
                        {p}
                      </Link>
                      {idx < arr.length - 1 && (
                        <span className="h-px w-4 border-t-2 border-dashed border-slate-200" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}