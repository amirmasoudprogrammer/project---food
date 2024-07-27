import React from 'react';
import CategoriesPage from "../../Components/templates/CategoriesPage";


function categories({data}) {
    return (
        <CategoriesPage data={data}/>
    );
}

export default categories;

export async function getServerSideProps(context) {
    const {query :{difficulty , time}} = context

    const res = await fetch("https://api-food-teal.vercel.app/data")
    const data = await res.json()

    const filterData= data.filter((items) => {
        const difficultyResult = items.details.filter((details) =>
            details.Difficulty && details.Difficulty === difficulty)

        const TimeResult = items.details.filter((details) =>{
            const cookingTime= details["Cooking Time"] || ""
            const [TimeDetails] = cookingTime.split(" ");

            if (time === "less" && TimeDetails && +TimeDetails <= 30){
                return details
            }else if (time === "more"  && +TimeDetails > 30){
                return details
            }
        })


        if (time && difficulty && difficultyResult.length && TimeResult.length ){
            return items
        }else if (!time && difficulty && difficultyResult.length){
            return items
        }else if(time && !difficulty && TimeResult.length){
            return items
        }
    })
    return{
        props :{data :filterData},
    }

}