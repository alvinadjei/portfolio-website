import { notFound } from 'next/navigation';
import { getArticleSlugs, getMdxSource, Frontmatter } from '@/app/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

interface BlogPageProps {
  params: Promise<{ slug: string }>; // params is a Promise
}

const components = {
  Link,
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params: rawParams }: BlogPageProps) {
  const params = await rawParams
  const { slug } = params;

  const allSlugs = getArticleSlugs();
  if (!allSlugs.includes(slug)) notFound();

  const { frontmatter, content } = await getMdxSource(slug);

  return (
    <main className="px-[5%] lg:px-[25%] mx-auto font-[family-name:var(--font-roboto-mono)]">
      <h1 className="text-4xl text-tiel font-bold mb-4">{frontmatter.title}</h1>
      <span className="text-md text-gray-300">{frontmatter.date}</span>
      <ul className="flex mt-1 mb-3 text-sm gap-4 text-gray-400">
        {frontmatter.tags.map((tag, index) => (
                            <li key={index}>
                                <Link 
                                    href={`/blog/tag/${tag.toLowerCase()}`}
                                    className="hover:text-tiel"
                                >
                                    #{tag}
                                </Link>
                            </li>
                        ))}
      </ul>
      <hr className="page-title-line"></hr>
      <article className="article">
        <MDXRemote source={content} components={components} />
      </article>
    </main>
  );
}
