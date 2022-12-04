import Lesalon from '../../components/Lesalon'

const Dossier = ({ isOpenMenu, baseArticles, aboutUsData, filterData }) => {
    return (
        <Lesalon
            isOpenMenu={isOpenMenu}
            baseArticles={baseArticles}
            aboutUsData={aboutUsData}
            filterData={filterData}
            path="dossier"
        />
    )
}

export default Dossier