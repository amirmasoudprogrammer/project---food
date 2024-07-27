import React from 'react';
import styles from "../layouts/StylesLayouts.module.css"
import Link from "next/link";

function Layouts({children}) {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <Link href="/">BotoFood</Link>
                </div>
                <div className={styles.right}>
                    <Link href="/menu">Menu</Link>
                    <Link href="/categories">Categories</Link>
                </div>
            </header>
            <div className={styles.container}>{children}</div>
            <footer className={styles.footer}>
                <a href="https://instagram.com/mramirmasoud.ir" target="_blank" rel="noreferrer">
                   mramirmasoud.ir
                </a>
                Next.js course | BotoFood Project &copy;
            </footer>
        </>
    );
}

export default Layouts;