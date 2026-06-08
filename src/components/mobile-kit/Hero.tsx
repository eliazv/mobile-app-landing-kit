'use client';

import { motion } from 'framer-motion';

import IphoneFrame from './IphoneFrame';
import AppStoreButton from '../AppStoreButton';
import PlayStoreButton from '../PlayStoreButton';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="relative max-w-screen-lg mx-auto px-4 pt-32 pb-12 md:pt-40">
            <div className="flex flex-col-reverse items-center gap-10 md:flex-row md:gap-16">
                <div className="flex-1 text-center md:text-left">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-foreground leading-tight"
                    >
                        {heroDetails.heading.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10">{heroDetails.heading.split(' ').slice(-1)}</span>
                            <motion.span
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="absolute left-0 bottom-1 h-3 bg-primary/60 rounded -z-0"
                            />
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-foreground-accent max-w-md mx-auto md:mx-0"
                    >
                        {heroDetails.subheading}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <AppStoreButton dark />
                        <PlayStoreButton dark />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="flex-1 flex justify-center"
                >
                    <div className="h-[28rem] md:h-[32rem]">
                        <IphoneFrame src={heroDetails.centerImageSrc} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
