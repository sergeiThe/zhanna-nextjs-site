import React from "react";
import styles from "./Nav.module.scss";
import copy from "../../data/copy";
import { useNavContext, PAGES } from "../../store/context";

function Nav() {
    const navCtx = useNavContext();

    return (
        <nav className={styles.nav}>
            <ul>
                <li
                    onClick={() => {
                        navCtx.goToPage(PAGES.WORK);
                    }}
                >
                    Mitt arbeid
                </li>
                <li
                    onClick={() => {
                        navCtx.goToPage(PAGES.ABOUT);
                    }}
                >
                    Om meg
                </li>
                <li
                    onClick={() => {
                        navCtx.goToPage(PAGES.SERVICES);
                    }}
                >
                    Tjenester
                </li>
                <li
                    onClick={() => {
                        navCtx.goToPage(PAGES.CONTACT);
                    }}
                >
                    Kontakt
                </li>
                <li>
                    <a
                        href={copy.links.booking}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Bestill time
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
