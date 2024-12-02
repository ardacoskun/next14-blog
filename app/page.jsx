import Link from "next/link";
import H1 from "@/components/h1";
import { getPosts } from "@/lib/posts";

export default async function Home() {
  const { posts } = await getPosts({ newest: true, limit: 3 });

  return (
    <>
      <section className="mb-8">
        <H1>Welcome to my page!</H1>
        <p>Next 15 Blog Example Page</p>
        <p>
          Checkout my{" "}
          <Link href="/about/projects" className="underline">
            projects
          </Link>
          ,{" "}
          <Link href="/photos" className="underline">
            photos
          </Link>{" "}
          and{" "}
          <Link href="/blog" className="underline">
            blog
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="mb-8 text-lg">Latest on the blog</h2>
        <ul className="font-mono">
          {posts.map((item) => (
            <li key={item.slug}>
              <span className="text-gray-400">
                {item.frontmatter.date}&nbsp;{" "}
              </span>
              <Link href={`/blog/${item.slug}`} className="underline">
                {item.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
