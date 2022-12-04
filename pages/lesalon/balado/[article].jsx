import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Lesalon from "../../../components/Lesalon";

const Article = ({ baseArticles }) => {
    const router = useRouter()
    return (
        <Lesalon
            path='balado'
            baseArticles={baseArticles}
            filteredArticle={router.query.article || 'unknown'}
        />
    )
}

export default Article