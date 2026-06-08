export interface IBlogSection {
    id: string;
    heading: string;
    body: string[];
}

export interface IBlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    coverImage: string;
    sections: IBlogSection[];
}

export const blogPosts: IBlogPost[] = [
    {
        slug: 'welcome-to-our-blog',
        title: 'Welcome to our blog',
        excerpt: 'Why we started writing about building and shipping mobile apps faster.',
        date: '2026-01-12',
        author: '[App Name] Team',
        coverImage: '/images/hero-mockup.webp',
        sections: [
            {
                id: 'why-a-blog',
                heading: 'Why a blog',
                body: [
                    'Welcome! This is the first post on our blog. Here we will share updates, tips and behind-the-scenes notes about building [App Name].',
                ],
            },
            {
                id: 'whats-next',
                heading: "What's next",
                body: [
                    'Replace this content with your own posts — each entry lives in src/data/blogPosts.ts and is rendered statically at build time for the best SEO and performance.',
                ],
            },
        ],
    },
    {
        slug: 'how-we-designed-the-app',
        title: 'How we designed the app',
        excerpt: 'A look at the design decisions behind our mobile experience.',
        date: '2026-02-03',
        author: '[App Name] Team',
        coverImage: '/images/mockup-1.webp',
        sections: [
            {
                id: 'balancing-simplicity-and-power',
                heading: 'Balancing simplicity and power',
                body: [
                    'Designing a mobile app is about balancing simplicity with capability. In this post we walk through the choices that shaped our product.',
                ],
            },
            {
                id: 'every-screen-has-a-job',
                heading: 'Every screen has a job',
                body: [
                    'From the onboarding flow to the core screens, every decision was guided by one question: does this make the experience faster and clearer for the user?',
                ],
            },
        ],
    },
    {
        slug: 'tips-for-getting-started',
        title: 'Tips for getting started',
        excerpt: 'A short guide to help new users get the most out of the app from day one.',
        date: '2026-03-18',
        author: '[App Name] Team',
        coverImage: '/images/mockup-2.webp',
        sections: [
            {
                id: 'set-up-your-profile',
                heading: 'Set up your profile',
                body: [
                    'New here? This guide collects the tips our community asks about most often, starting with setting up your profile.',
                ],
            },
            {
                id: 'discover-advanced-features',
                heading: 'Discover advanced features',
                body: [
                    'Once you are comfortable with the basics, explore the advanced features. Bookmark this page — we will keep it updated as the app evolves.',
                ],
            },
        ],
    },
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);
