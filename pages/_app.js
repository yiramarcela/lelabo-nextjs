import { useState } from "react";
import { TABLE_NAME, viewType } from "../api/config";
import "../App.css";
import "../index.css";
import Bg from "../components/Bg";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import Submenu from "../components/Submenu";
import useListBase from '../hooks/useListBase';
import "simplebar";
import "simplebar/dist/simplebar.min.css";
import Footer from '../components/Footer'

const App = ({ Component, pageProps }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)
  const toggleMenu = () => setIsOpenMenu(prev => !prev);
  const baseArticles = useListBase(TABLE_NAME.articles, viewType.edv);
  const aboutUsData = useListBase(TABLE_NAME.information);
  const filterInformationPage = field => aboutUsData.filter(data => data.Name === field)[0];
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Baskervville&family=Nunito:ital,wght@0,200;1,400&family=Pacifico&family=Roboto&family=Urbanist:wght@300&display=swap" rel="stylesheet" />
      <Bg />
      <div className='App'>
        <Navbar toggleMenu={toggleMenu} isOpenMenu={isOpenMenu} />

        <Menu
          baseArticles={baseArticles}
          toggleMenu={toggleMenu}
          isOpenMenu={isOpenMenu}
          setIsOpenSubMenu={setIsOpenSubMenu}
        />

        {isOpenSubMenu && <Submenu isOpenMenu={isOpenMenu} setIsOpenSubMenu={setIsOpenSubMenu} />}

        <Component
          {...pageProps}
          isOpenMenu={isOpenMenu}
          isOpenSubMenu={isOpenSubMenu}
          baseArticles={baseArticles}
          aboutUsData={aboutUsData}
          filterData={filterInformationPage}
        />
      </div>
      <Footer aboutUsData={aboutUsData} filterData={filterInformationPage} />
    </>
  )
}

export default App