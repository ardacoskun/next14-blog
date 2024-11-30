import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export const loadPost = (slug) => {
  const fileName = slug.endsWith(".mdx") ? slug : `${slug}.mdx`;

  return fs.readFileSync(path.join(process.cwd(), "content", fileName));
};

export const getPost = async (slug) => {
  const source = loadPost(slug);

  return await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });
};

export const getPosts = async ({
  sortByDate = false,
  page = 1,
  limit = 10,
  tags,
} = {}) => {
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

  let filteredPosts = posts;

  if (tags) {
    filteredPosts = filteredPosts.filter((post) =>
      post.frontmatter.tags.some((tag) => tags.includes(tag))
    );
  }

  return filteredPosts;
};
