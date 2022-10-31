import React from "react";
import copy from "../../data/copy";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./About.module.scss";

function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.about}
        >
            <h2>{copy.about.title}</h2>
            <p>{copy.about.subTitle}</p>
        </motion.section>
    );
}

export default About;
