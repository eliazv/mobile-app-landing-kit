'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

import { ctaDetails } from "@/data/cta"
import { appBannerDetails } from "@/data/appBanner"

import AppStoreButton from "./AppStoreButton"
import PlayStoreButton from "./PlayStoreButton"
import IphoneFrame from "./mobile-kit/IphoneFrame"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-20">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{ctaDetails.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{ctaDetails.subheading}</p>

                        <div className="mt-4 flex flex-col sm:flex-row items-center sm:gap-4">
                        <AppStoreButton />
                        <PlayStoreButton />
                        </div>

                        {/* Stack di screenshot ruotati, stesso comportamento dell'AppBanner di mobile-app-landing-template */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            className="relative flex justify-center mt-12 w-full"
                        >
                            {appBannerDetails.screenshots.map((src, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { scale: index > 0 ? 0.9 : 1, opacity: 0, rotate: 0 },
                                        visible: {
                                            scale: index > 0 ? 0.9 : 1,
                                            opacity: 1,
                                            rotate: index === 0 ? 0 : index === 1 ? -30 : 30,
                                        },
                                    }}
                                    transition={{
                                        stiffness: 150,
                                        mass: 0.5,
                                        type: 'spring',
                                        delay: index > 0 ? 0.8 : 0.5,
                                    }}
                                    className={clsx(
                                        'h-[26rem]',
                                        index === 0 && 'relative z-20 block',
                                        index === 1 && 'absolute origin-bottom-left hidden xl:block',
                                        index === 2 && 'absolute origin-bottom-right hidden xl:block'
                                    )}
                                >
                                    <IphoneFrame src={src} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
