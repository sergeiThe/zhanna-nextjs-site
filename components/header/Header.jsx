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

    let currentBgImg = "11";

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
                    >
                        <div className={styles.hat}>
                            <SocialIcons />
                            <Nav />
                        </div>
                        <div
                            className={`${styles.text} ${
                                navCtx.currentPage === PAGES.HOME
                                    ? styles["home-open-text"]
                                    : styles["home-closed-text"]
                            }`}
                        >
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
                            <button
                                onClick={() => {
                                    navCtx.goToPage(PAGES.ABOUT);
                                }}
                            >
                                Se all infoen
                            </button>
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
                        transition={{ duration: 0.5 }}
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
