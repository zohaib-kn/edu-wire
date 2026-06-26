export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  date: string;
  description: string;
}

export interface DetailedBlog {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  contentHtml: string;
}

const BASE_URL = "https://edu-wire.com";

// Scrape blogs list
export async function getLiveBlogs(page: number = 1): Promise<{ blogs: BlogPost[]; totalCount: number; currentPage: number; totalPages: number }> {
  try {
    const res = await fetch(`${BASE_URL}/blogs.php?page=${page}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch blogs page: ${res.status}`);
    }

    const html = await res.text();
    
    // Parse articles
    const articles = html.split("<article");
    const blogs: BlogPost[] = [];

    for (let i = 1; i < articles.length; i++) {
      const block = articles[i].split("</article>")[0];
      if (!block || !block.includes("blog-card")) continue;

      const slugMatch = block.match(/href="blog-page\.php\?slug=([^"&]+)"/);
      const imageMatch = block.match(/src="([^"]+)"/);
      const dateMatch = block.match(/class="card-date">([^<]+)<\/time>/);
      const titleMatch = block.match(/class="card-heading"[\s\S]*?>[\s\S]*?>([^<]+)<\/a>/);
      const descMatch = block.match(/class="card-para">([^<]+)<\/p>/);

      if (slugMatch && titleMatch) {
        let imageUrl = imageMatch ? imageMatch[1] : "";
        // Ensure image URL is absolute
        if (imageUrl && !imageUrl.startsWith("http")) {
          imageUrl = `${BASE_URL}/${imageUrl.replace(/^\//, "")}`;
        }

        blogs.push({
          slug: slugMatch[1],
          image: imageUrl,
          date: dateMatch ? dateMatch[1].trim() : "",
          title: titleMatch[1].trim(),
          description: descMatch ? descMatch[1].trim() : "",
        });
      }
    }

    // Parse pagination values
    let totalCount = 30; // fallback standard
    const countMatch = html.match(/of <strong>(\d+)<\/strong> articles/i);
    if (countMatch) {
      totalCount = parseInt(countMatch[1], 10);
    }

    const totalPages = Math.ceil(totalCount / 6);

    return {
      blogs,
      totalCount,
      currentPage: page,
      totalPages,
    };
  } catch (error) {
    console.error("Error scraping live blogs list:", error);
    return {
      blogs: [],
      totalCount: 0,
      currentPage: 1,
      totalPages: 1,
    };
  }
}

// Scrape detailed single blog page
export async function getLiveBlogBySlug(slug: string): Promise<DetailedBlog | null> {
  try {
    const res = await fetch(`${BASE_URL}/blog-page.php?slug=${slug}`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return null;
    }

    const html = await res.text();

    // Verify it's a valid article page
    if (!html.includes("bp-hero-title")) {
      return null;
    }

    // Extract Title
    const titleMatch = html.match(/<h1 class="bp-hero-title">([^<]+)<\/h1>/);
    const title = titleMatch ? titleMatch[1].trim() : "Blog Article";

    // Extract Description
    const descMatch = html.match(/<p class="bp-hero-para">([^<]+)<\/p>/);
    const description = descMatch ? descMatch[1].trim() : "";

    // Extract Date
    const dateMatch = html.match(/<time class="card-date">([^<]+)<\/time>/);
    const date = dateMatch ? dateMatch[1].trim() : "";

    // Extract Image
    const imageMatch = html.match(/<div class="bp-hero-image"[\s\S]*?src="([^"]+)"/);
    let imageUrl = imageMatch ? imageMatch[1] : "";
    if (imageUrl && !imageUrl.startsWith("http")) {
      imageUrl = `${BASE_URL}/${imageUrl.replace(/^\//, "")}`;
    }

    // Extract Main Article Body Content (between class="bp-body" main column)
    const bodyStartTag = '<main class="bp-body">';
    const bodyStartIdx = html.indexOf(bodyStartTag);
    if (bodyStartIdx === -1) {
      return null;
    }

    const bodyContentStart = bodyStartIdx + bodyStartTag.length;
    // We want to find the matching closing tag. Let's find the closing </main>
    const bodyEndIdx = html.indexOf("</main>", bodyContentStart);
    if (bodyEndIdx === -1) {
      return null;
    }

    let contentHtml = html.substring(bodyContentStart, bodyEndIdx);

    // Clean up contentHtml links
    // Redirect internal blog links back to next.js blogs page
    contentHtml = contentHtml.replace(/blog-page\.php\?slug=/g, "/blogs/");
    
    // Ensure all internal images point to the Hostinger absolute path
    contentHtml = contentHtml.replace(/src="(assets\/[^"]+)"/g, `src="${BASE_URL}/$1"`);
    contentHtml = contentHtml.replace(/src="(\.\/assets\/[^"]+)"/g, `src="${BASE_URL}/$1"`);

    return {
      slug,
      title,
      description,
      image: imageUrl,
      date,
      contentHtml,
    };
  } catch (error) {
    console.error(`Error scraping live blog [${slug}]:`, error);
    return null;
  }
}
