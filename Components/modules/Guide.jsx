import React from 'react';
import styles from "../modules/Guide.module.css"
import Link from "next/link";

function Guide(props) {
    return (
        <div className={styles.container}>
            <Link href="/menu">Menu</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/">Discount</Link>
        </div>
    );
}

export default Guide;