import React from "react";
import copy from "../../data/copy";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Services.module.scss";
import { RiScissors2Line, RiPhoneLine } from "react-icons/ri";

function Services() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.services}
        >
            <h2>{copy.services.title}</h2>
            <p>{copy.services.subTitle}</p>
            <a href={copy.links.booking} target="_blank" rel="noreferrer">
                <RiScissors2Line className={styles.scissors} />
                Se tjenester og priser på onlinebooq
            </a>
        </motion.section>
    );
}

export default Services;
