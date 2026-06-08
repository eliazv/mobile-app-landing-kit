import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { siteDetails } from '@/data/siteDetails';
import { cn } from '@/lib/utils';
import { Marquee } from '@/components/magicui/marquee';

const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

const ReviewCard: React.FC<{ name: string; role: string; message: string; avatar: string }> = ({
    name,
    role,
    message,
    avatar,
}) => {
    return (
        <figure
            itemScope
            itemType="https://schema.org/Review"
            className={cn(
                'relative h-full w-72 cursor-pointer overflow-hidden rounded-xl border p-5',
                'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
                'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
            )}
        >
            <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Product" className="hidden">
                <meta itemProp="name" content={siteDetails.siteName} />
            </div>
            <meta itemProp="reviewRating" content="5" />
            <div className="flex flex-row items-center gap-3">
                <Image
                    src={avatar}
                    alt={`${name} avatar`}
                    width={40}
                    height={40}
                    itemProp="image"
                    className="rounded-full shadow-md"
                />
                <div className="flex flex-col">
                    <figcaption itemProp="author" itemScope itemType="https://schema.org/Person" className="text-sm font-semibold text-secondary">
                        <span itemProp="name">{name}</span>
                    </figcaption>
                    <p className="text-xs text-foreground-accent">{role}</p>
                </div>
            </div>
            <blockquote itemProp="reviewBody" className="mt-3 text-sm text-foreground-accent">
                &quot;{message}&quot;
            </blockquote>
        </figure>
    );
};

const Testimonials: React.FC = () => {
    return (
        <section aria-label="Customer testimonials" itemScope itemType="https://schema.org/Product">
            <meta itemProp="name" content={siteDetails.siteName} />
            <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating" className="hidden">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="reviewCount" content={String(testimonials.length)} />
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:25s]">
                    {firstRow.map((testimonial) => (
                        <ReviewCard key={testimonial.name} {...testimonial} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:25s]">
                    {secondRow.map((testimonial) => (
                        <ReviewCard key={testimonial.name} {...testimonial} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>

            {/* visually hidden, crawlable testimonial text for SEO/LLM indexing */}
            <ul className="sr-only">
                {testimonials.map((testimonial) => (
                    <li key={testimonial.name}>
                        {testimonial.name}, {testimonial.role}: &quot;{testimonial.message}&quot;
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Testimonials;
