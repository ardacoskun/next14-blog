import fs from "fs";
import path from "path";
import { getPost } from "@/lib/posts";

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
      <h1>Recent Posts</h1>
    </>
  );
};

export default Page;
