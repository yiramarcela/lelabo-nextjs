import Lesalon from "../../../components/Lesalon"



const Article = ({baseArticles}) => {
    return (
        <Lesalon
            path='expositions'
            baseArticles={baseArticles}
            filteredArticle="Beans : projection du film de Tracey Deer"
        />
    )
}

export default Article