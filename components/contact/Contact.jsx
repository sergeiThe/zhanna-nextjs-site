import React from "react";
import copy from "../../data/copy";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Contact.module.scss";
import { RiScissors2Line, RiPhoneLine } from "react-icons/ri";
import { MdOutlineLocationCity } from "react-icons/md";

function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.contact}
        >
            <h2>{copy.contact.title}</h2>
            <p>{copy.contact.subTitle}</p>
            <a href={copy.links.booking} target="_blank" rel="noreferrer">
                <RiScissors2Line className={styles.scissors} />
                Bestill time
            </a>
            <div className={styles["contact-info"]}>
                <div className={styles.phone}>
                    <RiPhoneLine className={styles.icon} />
                    <span>{copy.contact.telefon}</span>
                </div>
                <div className={styles.phone}>
                    <MdOutlineLocationCity className={styles.icon} />
                    <span>{copy.contact.address}</span>
                </div>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8012.103214960421!2d10.383175636509606!3d63.431865699605815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319b3d62b7bb%3A0x4d878391a44a59cc!2sBersvendveita%2016%2C%207011%20Trondheim!5e0!3m2!1sen!2sno!4v1667203300741!5m2!1sen!2sno"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className={styles.map}
            ></iframe>
        </motion.section>
    );
}

export default Contact;
