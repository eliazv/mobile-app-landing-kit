import Link from 'next/link';

import { ctaDetails } from '@/data/cta';

const BlogCTACard: React.FC = () => {
    return (
        <div className="mt-16 max-w-3xl rounded-3xl bg-hero-background px-8 py-10 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">{ctaDetails.heading}</h3>
            <p className="mt-2 text-foreground-accent">{ctaDetails.subheading}</p>
            <Link
                href="/#cta"
                className="mt-6 inline-block rounded-full bg-primary px-8 py-3 text-black hover:bg-primary-accent transition-colors"
            >
                Scopri di più
            </Link>
        </div>
    );
};

export default BlogCTACard;
