import { cache } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost as getPostNotCached, getPosts } from "@/lib/posts";

const getPost = cache(async (slug) => await getPostNotCached(slug));

export async function generateStaticParams() {
  const { posts } = await getPosts({ limit: 1000 });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  try {
    const { frontmatter } = await getPost((await params)?.slug);
    return frontmatter;
  } catch (error) {}

  return {
    title: titles[params.slug],
    description,
  };
}

const Page = async ({ params }) => {
  let post;
  try {
    post = await getPost((await params)?.slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      <div className="flex mb-8 space-x-2">
        {post.frontmatter.tags.map((item) => (
          <Link
            key={item}
            href={`/blog?tags=${item}`}
            className="text-gray-500 dark:text-gray-400"
          >
            #{item}
          </Link>
        ))}
      </div>
      {post?.content}
    </article>
  );
};

export default Page;
