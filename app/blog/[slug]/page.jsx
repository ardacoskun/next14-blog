import { cache } from "react";
import { notFound } from "next/navigation";
import { getPost as getPostNotCached } from "@/lib/posts";

const getPost = cache(async (slug) => await getPostNotCached(slug));

export async function generateMetadata({ params }, parent) {
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
  if (!["first", "second"].includes((await params)?.slug)) {
    notFound();
  }

  let post;
  try {
    post = await getPost((await params)?.slug);
  } catch (error) {
    notFound();
  }

  return <article className="prose dark:prose-invert">{post?.content}</article>;
};

export default Page;
