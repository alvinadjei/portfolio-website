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
  const { slug } = params;

  const allSlugs = getArticleSlugs();
  if (!allSlugs.includes(slug)) notFound();

  const { frontmatter, content } = await getMdxSource(slug);

  return (
    <main className="p-8 max-w-2xl mx-auto font-[family-name:var(--font-roboto-mono)]">
      <h1 className="text-3xl font-bold mb-3">{frontmatter.title}</h1>
      <span className="text-sm text-gray-400">{frontmatter.date}</span>
      <div></div>
      <article className="article">
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
