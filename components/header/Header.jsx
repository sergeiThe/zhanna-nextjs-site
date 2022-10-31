import React, { useEffect } from "react";
import Image from "next/image";
import SocialIcons from "../social/SocialIcons";
import Nav from "./Nav";
import styles from "./Header.module.scss";
import copy from "../../data/copy";
import { RiScissors2Line } from "react-icons/ri";
import { useNavContext, PAGES } from "../../store/context";
import { AnimatePresence, motion } from "framer-motion";
import SecondaryNav from "./SecondaryNav";

function Header() {
    const navCtx = useNavContext();
    let isHomeOpenClass =
        navCtx.currentPage === PAGES.HOME ? "header-home" : "header-not-home";

    let currentBgImg;

    switch (navCtx.currentPage) {
        case PAGES.HOME:
            currentBgImg = "11";
            break;

        case PAGES.WORK:
            currentBgImg = "22";
            break;
        case PAGES.ABOUT:
            currentBgImg = "33";
            break;

        case PAGES.SERVICES:
            currentBgImg = "44";
            break;

        case PAGES.CONTACT:
            currentBgImg = "55";
            break;
        default:
            currentBgImg = "11";
            break;
    }

    return (
        <header className={`${styles.header} ${isHomeOpenClass}`}>
            <AnimatePresence>
                <Image
                    alt="header-zhanna"
                    src={`/images/bg/${currentBgImg}.jpg`}
                    objectFit="cover"
                    layout="fill"
                    style={{ zIndex: -1 }}
                />
            </AnimatePresence>

            <AnimatePresence>
                {navCtx.currentPage === PAGES.HOME && (
                    <motion.div
                        className={styles.container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    >
                        <div className={styles.hat}>
                            <SocialIcons />
                            <Nav />
                        </div>
                        <div className={styles.text}>
                            <h1>{copy.header.title}</h1>
                            <p>{copy.header.subTitle}</p>
                            <a
                                href={copy.links.booking}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <RiScissors2Line className={styles.scissors} />
                                Bestill time
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {navCtx.currentPage !== PAGES.HOME && (
                    <motion.div
                        className={styles.container}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <SecondaryNav />
                        <div className={styles.icons}>
                            <SocialIcons />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Header;

/*
<Image
                alt="zhanna frisør"
                src={"/main.jpg"}
                layout="fill"
                objectFit="cover"
                className={styles.img}
            />
            */
