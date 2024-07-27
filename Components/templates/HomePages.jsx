import React from 'react';
import styles from "../templates/homepage.module.css"
import Banner from "../modules/Banner";
import Attributes from "../modules/Attributes";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Lnstruction from "../modules/Lnstruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

function HomePages() {
    return (
        <div className={styles.container}>
            <Banner/>
            <Attributes/>
            <Definition/>
            <Companies/>
            <Lnstruction/>
            <Guide/>
            <Restrictions/>
        </div>
    );
}

export default HomePages;