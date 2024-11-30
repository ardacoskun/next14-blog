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
  newest = true,
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

  let dateA;
  let dateB;

  filteredPosts.sort((a, b) => {
    dateA = new Date(a.frontmatter.date);
    dateB = new Date(b.frontmatter.date);
    return newest ? dateB - dateA : dateA - dateB;
  });

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  return filteredPosts.slice(startIndex, endIndex);
};
