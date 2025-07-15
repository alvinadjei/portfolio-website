import { notFound } from 'next/navigation';
import { getArticleSlugs, getMdxSource, Frontmatter } from '@/app/lib/articles';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface BlogPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const allSlugs = getArticleSlugs();
  if (!allSlugs.includes(slug)) notFound();

  const { frontmatter, content } = getMdxSource(slug);

  return (
    <main className="p-8 max-w-2xl mx-auto font-[family-name:var(--font-roboto-mono)]">
      <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
      <span className="text-md text-gray-400">{frontmatter.date}</span>
      <ul className="flex mt-1 mb-3 text-sm gap-4 text-gray-400">
        {frontmatter.tags.map((tag, index) => (
                            <li key={index}>
                                #{tag}
                            </li>
                        ))}
      </ul>
      <hr className="page-title-line"></hr>
      <article className="article">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
