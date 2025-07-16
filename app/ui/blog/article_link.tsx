import Link from 'next/link';
import { getArticleSlugs, getArticleBySlug, Frontmatter } from '@/app/lib/articles';

interface ArticleLinkProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export default function ArticleLink({ slug, title, date, summary, tags }: ArticleLinkProps) {
  return (
    <li className="flex justify-center mb-6">
        <div className="flex flex-col w-[100%] my-4 mx-[5%] lg:mx-[30%]">
            <div>
                <Link href={`/blog/${slug}`} className="text-2xl tracking-tight font-semibold hover:text-tiel">
                    {title}
                </Link>
                 &nbsp; &nbsp;
                <span className="text-gray-300">{new Date(date).toLocaleDateString()}</span>
            </div>
            {summary && <p className="text-gray-200 mt-1">{summary}</p>}
            <ul className="flex mt-2 mb-3 text-sm gap-4 text-gray-400">
                {tags.map((tag, index) => (
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
        </div>
    </li>
  );
}