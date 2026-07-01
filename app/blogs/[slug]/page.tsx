import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLiveBlogBySlug, getLiveBlogs } from "@/lib/blog";
import {
  Calendar,
  BookOpen,
  ArrowLeft,
  ChevronRight,
  Share2,
  MessageCircle,
} from "lucide-react";

const Facebook = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Linkedin = (props: React.ComponentPropsWithoutRef<"svg">) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    // Fetch first few pages to pre-render existing blogs
    const page1 = await getLiveBlogs(1);
    const page2 = await getLiveBlogs(2);
    const page3 = await getLiveBlogs(3);
    const page4 = await getLiveBlogs(4);
    const page5 = await getLiveBlogs(5);

    const allBlogs = [
      ...page1.blogs,
      ...page2.blogs,
      ...page3.blogs,
      ...page4.blogs,
      ...page5.blogs,
    ];

    return allBlogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Error generating static params for blogs:", error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getLiveBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: `${blog.title} | Edu-Wire Blog`,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [{ url: blog.image }],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getLiveBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Derived (not new) content: an approximate reading time from the actual article text.
  const plainText = blog.contentHtml.replace(/<[^>]*>/g, " ");
  const wordCount = plainText.trim().split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const shareUrl = `https://edu-wire.com/blogs/${blog.slug}`;
  const shareText = encodeURIComponent(blog.title);

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Hero — light, on-brand */}
      <section className="relative overflow-hidden bg-white pt-12 pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-white to-primary/[0.03]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/blogs" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-500 truncate max-w-[200px] sm:max-w-xs">{blog.title}</span>
          </nav>

          {/* Meta badges */}
          <div className="mb-5 flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-primary font-semibold bg-primary/10 px-3 py-1.5 rounded-full w-fit">
              <Calendar className="h-3.5 w-3.5" />
              <span>Published {blog.date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold bg-slate-100 px-3 py-1.5 rounded-full w-fit">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{readingTime} min read</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight text-slate-900 mb-5 max-w-3xl">
            {blog.title}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
            {blog.description}
          </p>
        </div>
      </section>

      {/* Cover image — floats up, overlapping the hero */}
      {blog.image && (
        <div className="relative mx-auto -mt-16 w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-lg aspect-video max-h-[460px]">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8 flex-grow">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          {/* Article body */}
          <div className="min-w-0 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm">
            <div
              className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
              dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
            />

            <div className="mt-10 border-t border-slate-100 pt-6">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to all articles</span>
              </Link>
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:sticky lg:top-24 h-fit space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Article details
              </p>
              <ul className="space-y-3.5 text-sm">
                <li className="flex items-center gap-2.5 text-slate-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <Calendar className="h-4 w-4" />
                  </span>
                  <span>
                    Published
                    <span className="block font-semibold text-slate-800">{blog.date}</span>
                  </span>
                </li>
                <li className="flex items-center gap-2.5 text-slate-600">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <BookOpen className="h-4 w-4" />
                  </span>
                  <span>
                    Reading time
                    <span className="block font-semibold text-slate-800">{readingTime} minutes</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                <Share2 className="h-3.5 w-3.5" />
                Share this article
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href={`https://api.whatsapp.com/send?text=${shareText}%20${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}