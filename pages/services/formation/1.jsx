import Lesalon from "../../../components/Lesalon"


const Article = ({baseArticles}) => {
    return (
        <Lesalon
            path='formation'
            baseArticles={baseArticles}
            filteredArticle="La 3ème langue / The 3rd Tongue : Tournée virtuelle"
        />
    )
}

export default Article