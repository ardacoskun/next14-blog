import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const loadPost = (slug) => {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "content", fileName));
};

export const getPost = async (slug) => {
  const source = loadPost(slug);

  console.log("I was loading a file");
  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
};

export const getPosts = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "content"));

  return await Promise.all(
    files.map(async (item) => {
      const { frontmatter } = await getPost(item);

      return {
        frontmatter,
        slug: item.replace(".mdx", ""),
      };
    })
  );
};