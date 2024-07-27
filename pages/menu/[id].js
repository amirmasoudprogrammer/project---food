import React from 'react';
import {useRouter} from "next/router";
import DetailsPages from "../../Components/templates/DetailsPages";

function Details({data}) {
    const router = useRouter()

    if (router.isFallback){
        return <h2>کمی صبر کنید ....</h2>
    }

    return (
        <DetailsPages {...data}/>
    );
}

export default Details;

export async function getStaticPaths() {
    const respo = await fetch("https://api-food-teal.vercel.app/data")
    const data = await respo.json();
    const DataSlice = data.slice(0, 10)
    const paths = DataSlice.map(food => ({
        params: {id: food.id.toString()}
    }))
    return {
        paths: paths,
        fallback: true,
    }
}


export async function getStaticProps(context) {
    const {params} = context;
    const respo = await fetch(`https://api-food-teal.vercel.app/data/${params.id}`)
    const data = await respo.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    return {
        props: {data},
        revalidate: 1 * 60 * 60 ,
    }


}