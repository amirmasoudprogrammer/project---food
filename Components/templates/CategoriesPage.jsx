import React, {useEffect, useState} from 'react';
import styles from "../templates/CategoriesPage.module.css"
import {useRouter} from "next/router";
import Card from "../modules/Card";

function CategoriesPage({data}) {
    const router = useRouter()
    const [query, setQuery] = useState({difficulty: "", time: ""})


    useEffect(() => {
        const {difficulty, time} = router.query;
        if (query.difficulty !== difficulty || query.time !== time) {
            setQuery({difficulty, time})
        }

    }, [])

    const startChange = (e) => {
        setQuery({...query, [e.target.name]: e.target.value})
    }
    const startClick = () => {
        router.push({pathname: "/categories", query: query})
    }
    return (
        <div className={styles.container}>
            <h2>Categories</h2>
            <div className={styles.subContainer}>
                <div className={styles.select}>
                    <select value={query.difficulty} name="difficulty" onChange={startChange}>
                        <option value="">Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select value={query.time} name="time" onChange={startChange}>
                        <option value="">Cooking Time</option>
                        <option value="more">More than 30 min</option>
                        <option value="less">Less than 30 min</option>
                    </select>
                    <button onClick={startClick}>Search</button>
                </div>
                <div className={styles.cards}>
                    {!data.length ? (<img src="/images/search.png" alt="category"/>) : null}
                    {data.map(((item) => <Card key={item.id} {...item}/>))}
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage;