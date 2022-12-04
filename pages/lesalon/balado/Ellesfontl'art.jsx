import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Lesalon from "../../../components/Lesalon";

const Article = ({ baseArticles }) => {
    return (
        <Lesalon
            path='balado'
            baseArticles={baseArticles}
            filteredArticle="Ellesfontl'art"
        />
    )
}

export default Article