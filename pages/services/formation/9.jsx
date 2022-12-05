import Lesalon from "../../../components/Lesalon"


const Article = ({baseArticles}) => {
    return (
        <Lesalon
            path='formation'
            baseArticles={baseArticles}
            filteredArticle="Les jeunes font l’art"
        />
    )
}

export default Article