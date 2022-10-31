import React from "react";
import { FaFacebook, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import styles from "./SocialIcons.module.scss";
import copy from "../../data/copy";

function SocialIcons() {
    return (
        <div className={styles.icons}>
            <a href={copy.links.fb} target="_blank" rel="noreferrer">
                <FaFacebook />
            </a>
            <a href={copy.links.ig} target="_blank" rel="noreferrer">
                <FaInstagram />
            </a>
            <a href={copy.links.messenger} target="_blank" rel="noreferrer">
                <FaFacebookMessenger />
            </a>
        </div>
    );
}

export default SocialIcons;
