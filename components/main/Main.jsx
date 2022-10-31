import React from "react";
import styles from "./Main.module.scss";
import { useNavContext, PAGES } from "../../store/context";
import About from "../about/About";
import { AnimatePresence } from "framer-motion";
import Contact from "../contact/Contact";
import Services from "../services/Services";
import Work from "../work/Work";

function Main() {
    const navCtx = useNavContext();
    let isHomeOpenClass =
        navCtx.currentPage === PAGES.HOME ? "main-home" : "main-not-home";
    return (
        <main className={`${styles.main} ${isHomeOpenClass}`}>
            <AnimatePresence>
                {navCtx.currentPage == PAGES.ABOUT ? (
                    <About />
                ) : navCtx.currentPage == PAGES.SERVICES ? (
                    <Services />
                ) : navCtx.currentPage == PAGES.CONTACT ? (
                    <Contact />
                ) : navCtx.currentPage == PAGES.WORK ? (
                    <Work />
                ) : null}
            </AnimatePresence>
        </main>
    );
}

export default Main;
