import Link from "next/link";
import { getPosts } from "@/lib/posts";

const Page = async ({ searchParams }) => {
  const tags = searchParams?.tags?.split(",");
  const posts = await getPosts({ tags });

  return (
    <>
      <h1 className="mb-8 text-xl">Recent Posts</h1>
      <div className="mb-8 text-lg text-gray-600 dark:text-gray-400">
        Stay up to date with most recent posts
      </div>

      <hr />

      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {posts.map((item) => (
          <li key={item.slug}>
            <Link
              href={`blog/${item.slug}`}
              className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
            >
              {item.frontmatter.title}
            </Link>
            <div className="mt-2 text-sm text-gray-400">
              {item.frontmatter.date}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Page;
