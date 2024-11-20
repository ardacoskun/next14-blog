import fs from "fs";
import path from "path";
import { getPost } from "@/lib/posts";
import Link from "next/link";

const Page = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  const posts = await Promise.all(
    files.map(async (item) => {
      const { frontmatter } = await getPost(item);

      return {
        frontmatter,
        slug: item.replace(".mdx", ""),
      };
    })
  );

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
