'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

import type { IBlogSection } from '@/data/blogPosts';

interface Props {
    sections: IBlogSection[];
    className?: string;
}

const TableOfContents: React.FC<Props> = ({ sections, className }) => {
    const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '');

    useEffect(() => {
        const handleScroll = () => {
            const positions = sections.map(({ id }) => {
                const element = document.getElementById(id);
                return { id, top: element ? element.getBoundingClientRect().top : Infinity };
            });

            const active =
                positions.find(({ top }) => top >= -50 && top <= 120) ??
                positions.filter(({ top }) => top < -50).sort((a, b) => b.top - a.top)[0] ??
                positions[0];

            if (active) setActiveId(active.id);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 96;
        const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
    };

    if (sections.length === 0) return null;

    return (
        <nav className={clsx('space-y-3', className)}>
            <h4 className="text-sm font-semibold text-foreground">On this page</h4>
            <ul className="space-y-2 relative">
                {sections.map(({ id, heading }) => (
                    <li key={id} className="relative pl-4">
                        {activeId === id && (
                            <motion.span
                                layoutId="toc-active-indicator"
                                className="absolute left-0 top-0.5 bottom-0.5 w-0.5 rounded-full bg-primary"
                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                        )}
                        <button
                            onClick={() => handleClick(id)}
                            className={clsx(
                                'block w-full text-left text-sm transition-colors hover:text-foreground',
                                activeId === id ? 'text-primary font-medium' : 'text-foreground-accent'
                            )}
                        >
                            {heading}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;
