'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

import { footerDetails } from '@/data/footer';
import { menuItems } from '@/data/menuItems';

// Colori identici al tema "corporate" (daisyUI) usato in mobile-app-landing-template:
// neutral = #181a2a, neutral-content = #edf2f7, primary = #4d6eff
const NEUTRAL = '#181a2a';
const NEUTRAL_CONTENT = '#edf2f7';
const PRIMARY = '#4d6eff';

const fadeInLeft = {
    hidden: { opacity: 0, x: '-100%' },
    visible: { opacity: 1, x: 0 },
};
const fadeInScale = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1 },
};

const Footer: React.FC = () => {
    const { socials } = footerDetails;

    return (
        <footer className="relative px-4 pt-0 pb-12" style={{ backgroundColor: NEUTRAL, color: NEUTRAL_CONTENT }}>
            <div className="absolute -top-12 left-0 w-full h-12 rounded-t-[50%]" style={{ backgroundColor: NEUTRAL }} />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="relative max-w-screen-lg mx-auto mt-12"
            >
                <nav className="flex flex-col items-start gap-4">
                    {menuItems.map(({ text, url }, index) => (
                        <motion.div key={text} variants={fadeInLeft} transition={{ delay: index * 0.25 }}>
                            <Link
                                href={url}
                                className="text-xl font-bold block uppercase whitespace-nowrap no-underline transition-colors md:text-4xl"
                                style={{ color: PRIMARY }}
                            >
                                {text}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <aside className="flex flex-col items-center justify-between mt-4 w-full overflow-hidden md:flex-row lg:overflow-visible">
                    <div className="flex items-center gap-3 w-full" style={{ color: PRIMARY }}>
                        {socials?.facebook && (
                            <motion.a variants={fadeInLeft} transition={{ delay: 0.25 }} className="w-8 h-8 hover:opacity-50 transition-opacity" target="_blank" href={socials.facebook}>
                                <FaFacebookF className="w-full h-full" />
                            </motion.a>
                        )}
                        {socials?.instagram && (
                            <motion.a variants={fadeInLeft} transition={{ delay: 0.5 }} className="w-8 h-8 hover:opacity-50 transition-opacity" target="_blank" href={socials.instagram}>
                                <FaInstagram className="w-full h-full" />
                            </motion.a>
                        )}
                        {socials?.x && (
                            <motion.a variants={fadeInLeft} transition={{ delay: 0.75 }} className="w-8 h-8 hover:opacity-50 transition-opacity" target="_blank" href={socials.x}>
                                <FaTwitter className="w-full h-full" />
                            </motion.a>
                        )}
                    </div>

                    <div className="flex gap-4 mt-8 mb-4 md:m-0">
                        <motion.div variants={fadeInScale} transition={{ delay: 0.25 }}>
                            <Link href="/terms" className="font-bold hover:opacity-50 transition-opacity lg:whitespace-nowrap" style={{ color: PRIMARY }}>
                                Terms & conditions
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeInScale} transition={{ delay: 0.5 }}>
                            <Link href="/privacy" className="font-bold hover:opacity-50 transition-opacity lg:whitespace-nowrap" style={{ color: PRIMARY }}>
                                Privacy policy
                            </Link>
                        </motion.div>
                        <motion.div variants={fadeInScale} transition={{ delay: 0.75 }}>
                            <Link href="/blog" className="font-bold hover:opacity-50 transition-opacity lg:whitespace-nowrap" style={{ color: PRIMARY }}>
                                Blog
                            </Link>
                        </motion.div>
                    </div>

                    <motion.p variants={fadeInScale} transition={{ delay: 1 }} className="mt-0.5 md:ml-4 md:whitespace-nowrap">
                        All rights reserved &copy; {new Date().getFullYear()}
                    </motion.p>
                </aside>
            </motion.div>
        </footer>
    );
};

export default Footer;
