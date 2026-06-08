import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import Container from '@/components/Container';
import { siteDetails } from '@/data/siteDetails';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
    title: `Blog | ${siteDetails.siteName}`,
    description: `Latest news, guides and updates from ${siteDetails.siteName}.`,
    alternates: {
        canonical: `${siteDetails.siteUrl}blog`,
    },
};

const BlogPage: React.FC = () => {
    return (
        <Container className="py-16 md:py-24">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">Blog</h1>
                <p className="mt-4 text-foreground-accent">
                    News, guides and updates from the {siteDetails.siteName} team.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block rounded-3xl overflow-hidden border border-foreground/10 hover:border-foreground/30 transition-colors"
                    >
                        <div className="relative h-48 w-full overflow-hidden bg-hero-background">
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-foreground-accent">
                                {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                            <p className="mt-2 text-foreground-accent line-clamp-2">{post.excerpt}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </Container>
    );
};

export default BlogPage;
