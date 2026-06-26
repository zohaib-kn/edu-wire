import React from "react";
import { notFound } from "next/navigation";
import { getLiveBlogBySlug, getLiveBlogs } from "@/lib/blog";
import { Calendar } from "lucide-react";
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

  return (
    <div className="bg-slate-50 flex flex-col min-h-screen">
      {/* Blog Hero Banner */}
      <section className="bg-slate-900 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-4 bg-primary/10 px-3 py-1.5 rounded-full w-fit">
            <Calendar className="h-3.5 w-3.5" />
            <span>Published {blog.date}</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl leading-tight text-white mb-6">
            {blog.title}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
            {blog.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 flex-grow">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-sm space-y-8">
          {/* Header Image */}
          {blog.image && (
            <div className="overflow-hidden rounded-2xl aspect-video bg-slate-100 border border-slate-100 max-h-[460px]">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Article text content */}
          <div
            className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
          />
        </div>
      </section>
    </div>
  );
}
