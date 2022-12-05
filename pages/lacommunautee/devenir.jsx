import Devenir from "../../components/Devenir"

const DevenirPage = ({ isOpenMenu, aboutUsData, filterData}) => {
    return (
        <Devenir isOpenMenu={isOpenMenu} data={aboutUsData} filterData={filterData} pageKey='Devenir membre' />
    )
}

export default DevenirPage