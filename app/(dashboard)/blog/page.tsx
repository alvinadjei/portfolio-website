import { Metadata } from 'next';
import ArticleLink from '@/app/ui/blog/article_link';
import { getArticleSlugs, getArticleBySlug, Frontmatter } from '@/app/lib/articles';

export const metadata: Metadata = {
    title: 'Blog',
};

interface ArticleSummary {
  slug: string;
  frontmatter: Frontmatter;
}

export default function BlogIndexPage() {
  const articles: ArticleSummary[] = getArticleSlugs()
    .map((slug) => ({
      slug,
      frontmatter: getArticleBySlug(slug).frontmatter,
    }))
    .filter((a) => !a.frontmatter.draft)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());

  return (
    <main className='font-[family-name:var(--font-roboto-mono)]'>
        <div className="lg:block flex flex-col items-center page-bounds"> {/* flex column containing all page elements */}
            <h1 className="page-title">cranial window </h1>
            <hr className="page-title-line"></hr>
            <h1 className="text-2xl font my-6 text-gray-400">a direct glimpse of my thoughts, every now and then</h1>
        </div>
        <ul className="my-5">
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