'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import { footerDetails } from '@/data/footer';
import { menuItems } from '@/data/menuItems';

const fadeInLeft = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
};

const Footer: React.FC = () => {
    const { socials } = footerDetails;

    return (
        <footer className="relative bg-foreground text-background px-4 pt-12 pb-12 rounded-t-[3rem]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="max-w-screen-lg mx-auto"
            >
                <nav className="flex flex-col items-start gap-4">
                    {menuItems.map(({ text, url }, index) => (
                        <motion.div key={text} variants={fadeInLeft} transition={{ delay: index * 0.25 }}>
                            <Link
                                className="text-xl font-bold block uppercase whitespace-nowrap no-underline text-primary hover:text-primary/50 md:text-4xl"
                                href={url}
                            >
                                {text}
                            </Link>
                        </motion.div>
                    ))}
                </nav>
                <aside className="flex flex-col items-center justify-between mt-8 w-full md:flex-row">
                    <div className="flex items-center gap-3 w-full text-primary">
                        {socials?.facebook && (
                            <motion.a variants={fadeInLeft} transition={{ delay: 0.25 }} className="w-8 h-8 hover:text-primary/50" target="_blank" href={socials.facebook}>
                                <FaFacebookF className="w-full h-full" />
                            </motion.a>
                        )}
                        {socials?.instagram && (
                            <motion.a variants={fadeInLeft} transition={{ delay: 0.5 }} className="w-8 h-8 hover:text-primary/50" target="_blank" href={socials.instagram}>
                                <FaInstagram className="w-full h-full" />
                            </motion.a>
                        )}
                        {socials?.x && (
                            <motion.a variants={fadeInLeft} transition={{ delay: 0.75 }} className="w-8 h-8 hover:text-primary/50" target="_blank" href={socials.x}>
                                <FaTwitter className="w-full h-full" />
                            </motion.a>
                        )}
                    </div>
                    <div className="flex gap-4 mt-8 mb-4 md:m-0">
                        <Link href="/blog" className="font-bold text-primary hover:text-primary/50 whitespace-nowrap">Blog</Link>
                        <Link href="/privacy" className="font-bold text-primary hover:text-primary/50 whitespace-nowrap">Privacy policy</Link>
                        <Link href="/terms" className="font-bold text-primary hover:text-primary/50 whitespace-nowrap">Terms</Link>
                    </div>
                    <p className="mt-0.5 md:ml-4 md:whitespace-nowrap text-background/70">
                        All rights reserved &copy; {new Date().getFullYear()}
                    </p>
                </aside>
            </motion.div>
        </footer>
    );
};

export default Footer;
