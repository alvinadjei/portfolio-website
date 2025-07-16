import fs from "fs"
import matter from "gray-matter"
import path from "path"
// import moment from "moment"
// import { remark } from "remark"
// import html from "remark-html"

const ARTICLES_PATH = path.join(process.cwd(), 'articles');

export interface Frontmatter {
  title: string;
  date: string;
  tags: string[];
  summary: string;
  [key: string]: any;
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_PATH)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getArticleBySlug(slug: string): { content: string; frontmatter: Frontmatter } {
  const fullPath = path.join(ARTICLES_PATH, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContent);
  return {
    content,
    frontmatter: data as Frontmatter,
  };
}

export function getMdxSource(slug: string) {
  const { content, frontmatter } = getArticleBySlug(slug);
  return {
    frontmatter,
    content, // <- return raw MDX string
  };
}