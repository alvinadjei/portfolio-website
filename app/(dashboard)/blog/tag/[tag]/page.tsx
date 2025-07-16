import ArticleLink from '@/app/ui/blog/article_link';
import { getArticleSlugs, getArticleBySlug, Frontmatter } from '@/app/lib/articles';
import { notFound } from 'next/navigation';

interface TagPageProps {
  params: { tag: string };
}

interface ArticleSummary {
  slug: string;
  frontmatter: Frontmatter;
}

export function generateStaticParams() {
  const slugs = getArticleSlugs();
  const tagsSet = new Set<string>();

  slugs.forEach((slug) => {
    const { frontmatter } = getArticleBySlug(slug);
    frontmatter.tags?.forEach((tag) => tagsSet.add(tag.toLowerCase()));
  });

  return Array.from(tagsSet).map((tag) => ({ tag }));
}

export default function TagPage({ params }: TagPageProps) {
  const tag = params.tag.toLowerCase();

  const articles: ArticleSummary[] = getArticleSlugs()
    .map((slug) => ({
      slug,
      frontmatter: getArticleBySlug(slug).frontmatter,
    }))
    .filter((a) => a.frontmatter.tags?.map((t) => t.toLowerCase()).includes(tag))
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  if (articles.length === 0) {
    notFound();
  }

  return (
    <main className='font-[family-name:var(--font-roboto-mono)]'>
        <div className="lg:block flex flex-col items-center page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">cranial window </h1>
            <hr className="page-title-line"></hr>
            <h1 className="text-2xl font my-6 text-gray-400">posts tagged with #{tag}</h1>
        </div>
        <ul>
            {articles.map(({ slug, frontmatter }) => (
            <ArticleLink
                key={slug}
                slug={slug}
                title={frontmatter.title}
                date={frontmatter.date}
                summary={frontmatter.summary}
                tags={frontmatter.tags}
            />
            ))}
        </ul>
    </main>
  );
}
