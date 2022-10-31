import Main from "../main/Main";
import React from "react";
import Header from "../header/Header";
import styles from "./Layout.module.scss";

function Layout() {
    return (
        <div className={styles.layout}>
            <Header />
            <Main />
        </div>
    );
}

export default Layout;
