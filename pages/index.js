import Alaune from "../components/Alaune"

const Home = ({ baseArticles, isOpenMenu, isOpenSubMenu }) => isOpenMenu || !isOpenSubMenu ?
  <Alaune baseArticles={baseArticles} isOpenMenu={isOpenMenu} />
  : null

export default Home