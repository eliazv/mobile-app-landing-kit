import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Container from '@/components/Container';
import TableOfContents from '@/components/mobile-kit/TableOfContents';
import { siteDetails } from '@/data/siteDetails';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';

interface Props {
    params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => blogPosts.map(({ slug }) => ({ slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | ${siteDetails.siteName}`,
        description: post.excerpt,
        alternates: {
            canonical: `${siteDetails.siteUrl}blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: [{ url: post.coverImage }],
        },
    };
};

const BlogPostPage: React.FC<Props> = async ({ params }) => {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) notFound();

    return (
        <Container className="py-16 md:py-24">
            <Link href="/blog" className="text-sm text-foreground-accent hover:text-primary transition-colors">
                &larr; Back to blog
            </Link>

            <header className="mt-6 max-w-3xl">
                <p className="text-sm text-foreground-accent">
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    {' · '}
                    {post.author}
                </p>
                <h1 className="mt-2 text-4xl md:text-5xl font-bold text-foreground">{post.title}</h1>
                <p className="mt-4 text-lg text-foreground-accent">{post.excerpt}</p>
            </header>

            <div className="relative mt-8 h-64 md:h-96 w-full max-w-3xl rounded-3xl overflow-hidden">
                <Image src={post.coverImage} alt={post.title} fill className="object-cover" unoptimized />
            </div>

            <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12 max-w-5xl">
                <article className="prose max-w-none">
                    {post.sections.map(({ id, heading, body }) => (
                        <section key={id} id={id} className="scroll-mt-24 mb-10">
                            <h2 className="text-2xl font-semibold text-foreground mb-3">{heading}</h2>
                            {body.map((paragraph, index) => (
                                <p key={index} className="text-foreground-accent leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}
                </article>

                <aside className="hidden lg:block">
                    <div className="sticky top-28">
                        <TableOfContents sections={post.sections} />
                    </div>
                </aside>
            </div>
        </Container>
    );
};

export default BlogPostPage;
