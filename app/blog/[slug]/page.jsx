import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts";

export async function generateMetadata({ params }, parent) {
  try {
    const { frontmatter } = await getPost(params?.slug);
    return frontmatter;
  } catch (error) {}

  return {
    title: titles[params.slug],
    description,
  };
}

const Page = async ({ params }) => {
  if (!["first", "second"].includes(params?.slug)) {
    notFound();
  }

  let post;
  try {
    post = await getPost(params?.slug);
  } catch (error) {
    notFound();
  }

  return <article className="prose dark:prose-invert">{post?.content}</article>;
};

export default Page;
