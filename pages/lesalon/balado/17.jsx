import Lesalon from '../../../components/Lesalon'

const Article = ({baseArticles}) => {
    return (
        <Lesalon
            path='balado'
            baseArticles={baseArticles}
            filteredArticle="LaGangfranco-ontarienneépisode1"
        />
    )
}

export default Article