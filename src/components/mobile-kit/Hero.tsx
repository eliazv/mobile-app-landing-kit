'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import SingleScreenshot from './SingleScreenshot';
import AppStoreButton from '../AppStoreButton';
import PlayStoreButton from '../PlayStoreButton';
import { heroAltDetails } from '@/data/heroAlt';

const Hero: React.FC = () => {
    const {
        rewards,
        headline,
        headlineMark,
        subtitle,
        usersDescription,
        screenshots,
        googlePlayLink,
        appStoreLink,
    } = heroAltDetails;

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });

    const words = headline.split(' ');
    const [markStart, markEnd] = headlineMark;

    return (
        <section id="hero" className="relative pb-8 md:pb-4">
            <div className="max-w-screen-lg mx-auto py-4 px-4 md:py-16 md:pt-32">
                <div className="flex flex-col md:flex-row">
                    {/* Testo */}
                    <div className="flex flex-1 items-center md:items-start md:h-[300vh]">
                        <div className="static top-40 flex flex-col justify-center py-8 md:sticky md:h-[548px]">
                            {rewards?.length > 0 && (
                                <div className="flex flex-col gap-2 my-4 sm:flex-row">
                                    {rewards.map((reward, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.15 }}
                                            className="flex items-center self-center h-8 md:h-12"
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/misc/wreath-left.webp" alt="" className="h-full" />
                                            <p className="text-xs text-foreground-accent whitespace-pre text-center px-1">{reward}</p>
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src="/misc/wreath-right.webp" alt="" className="h-full" />
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            <motion.h1
                                initial={{ opacity: 0, rotateZ: -10 }}
                                animate={{ opacity: 1, rotateZ: 0 }}
                                className="mt-0 mb-4 text-4xl md:text-6xl font-bold text-foreground leading-tight"
                            >
                                {words.slice(0, markStart).join(' ')}{' '}
                                <span className="inline-block relative">
                                    <span className="relative z-10">{words.slice(markStart, markEnd).join(' ')}</span>
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 0.6, delay: 1 }}
                                        className="h-full top-0 left-0 -z-0 absolute inline-block bg-primary/50 rounded-lg"
                                    />
                                </span>{' '}
                                {words.slice(markEnd).join(' ')}
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 0.8, x: 0 }}
                                transition={{ delay: 0.5, ease: 'easeInOut' }}
                                className="whitespace-pre-wrap text-left m-0 my-1 max-w-md text-foreground-accent md:text-lg md:max-w-lg"
                            >
                                {subtitle}
                            </motion.p>

                            <motion.ul
                                initial={{ opacity: 0, y: '100%' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="list-none flex flex-col sm:flex-row gap-1.5 sm:gap-4 m-0 p-0 mt-4 items-center md:items-start [&_button]:!mt-0"
                            >
                                {googlePlayLink && (
                                    <li className="m-0 p-0">
                                        <PlayStoreButton dark />
                                    </li>
                                )}
                                {appStoreLink && (
                                    <li className="m-0 p-0">
                                        <AppStoreButton dark />
                                    </li>
                                )}
                            </motion.ul>

                            {usersDescription && (
                                <div className="flex items-center gap-2 my-3">
                                    <ul className="flex -space-x-3">
                                        {Array.from(Array(5)).map((_, index) => (
                                            <motion.li
                                                key={index}
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ delay: 0.3 + index * 0.15 }}
                                                className="relative"
                                            >
                                                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-background">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={`/avatars/${index + 1}.webp`} alt={`app user ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    <motion.p
                                        className="text-sm text-foreground-accent"
                                        initial={{ scale: 0, opacity: 0, y: '100%' }}
                                        animate={{ scale: 1, opacity: 1, y: 0 }}
                                        transition={{ delay: 1.1 }}
                                    >
                                        {usersDescription}
                                    </motion.p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mockup con scroll-effect */}
                    <div className="min-h-[300vh] -z-10" ref={ref}>
                        <div className="flex justify-center sticky top-28 md:top-40">
                            <motion.div
                                initial={{ scale: 0.4, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ type: 'spring', stiffness: 200, mass: 0.4, duration: 0.5, delay: 0.3 }}
                                className="relative h-[548px] xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[3rem]"
                            >
                                <div className="absolute top-2.5 left-3 w-[calc(100%-24px)] h-[calc(100%-16px)] rounded-[1rem] xs:rounded-[2rem] overflow-hidden">
                                    {screenshots.map((src, index) => (
                                        <SingleScreenshot
                                            key={src}
                                            src={src}
                                            scrollYProgress={scrollYProgress}
                                            index={index}
                                            totalCount={screenshots.length}
                                        />
                                    ))}
                                </div>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/misc/iphone-frame.webp" alt="iphone frame" className="relative z-10 h-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
