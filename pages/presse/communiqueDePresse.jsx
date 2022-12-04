import Lesalon from '../../components/Lesalon'

const CommuniqueDePresse = ({isOpenMenu,baseArticles, aboutUsData, filterData }) => {
    return (
        <Lesalon
            isOpenMenu={isOpenMenu}
            baseArticles={baseArticles}
            aboutUsData={aboutUsData}
            filterData={filterData}
            path="communiqueDePresse"
        />
    )
}

export default CommuniqueDePresse