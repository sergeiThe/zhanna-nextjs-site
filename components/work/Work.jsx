import React from "react";
import copy from "../../data/copy";
import images from "../../data/images";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styles from "./Work.module.scss";

function Work() {
    const imagesList = images.map((img) => {
        return (
            <li key={img + "rijfirj"}>
                <Image
                    height="200px"
                    width="230px"
                    alt={img}
                    src={`/images/work/${img}.jpg`}
                    objectFit="cover"
                    style={{ borderRadius: 20 }}
                    className={styles.img}
                />
            </li>
        );
    });
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.work}
        >
            <h2>{copy.work.title}</h2>
            <p>{copy.work.subTitle}</p>
            <ul>{imagesList}</ul>
        </motion.section>
    );
}

export default Work;
