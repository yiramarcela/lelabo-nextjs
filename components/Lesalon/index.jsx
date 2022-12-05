/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "simplebar";
import { pageKeys } from "../../api/config";
import { Information } from "../Information";
import Saloncard from "./Saloncard";
import styles from './style.module.scss';
import NotFound from "../common/NotFound";
import { useRouter } from "next/router";
import Link from "next/link";
import strings from "../../utils/strings";

const Lesalon = ({
  isOpenMenu,
  baseArticles,
  aboutUsData,
  path,
  filterData,
  filteredArticle }) => {

  const [ShowDetails, setShowDetails] = useState(false);
  const [menuElements, setMenuElements] = useState([]);
  const [isFromArticles, setIsFromArticles] = useState(false);
  const [isInformative, setIsInformative] = useState(false);
  const [pageKey, setPageKey] = useState(null);
  const [articleChosen, setArticleChosen] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const toggleDetails = () => {
    menuElements.length !== 0 && setShowDetails(!ShowDetails);
  };

  const filterArticle = pageKey => {
    if (baseArticles.length === 0) return;
    setMenuElements(baseArticles.filter(article => {
      if (article.SectionDuMenu) {
        return article.SectionDuMenu[0] === pageKey
      }
      return false;
    }
    ));
  };


  useEffect(() => {
    console.log({ menuElements });
  }, [menuElements])

  useEffect(() => {
    if (!path &&
      baseArticles.length === 0 &&
      aboutUsData.length === 0) return;
    switch (path) {
      case 'location':
        setPageKey(pageKeys.location);
        setIsInformative(true);
        break;
      case 'studio':
        setPageKey(pageKeys.studio);
        setIsInformative(true);
        break;
      case 'formation':
        setPageKey(pageKeys.formation);
        filterArticle(pageKeys.formation);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'benevolat':
        setPageKey(pageKeys.benevolat);
        filterArticle(pageKeys.benevolat);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'balado':
        setPageKey(pageKeys.balado);
        filterArticle(pageKeys.balado);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'video':
        setPageKey(pageKeys.video);
        filterArticle(pageKeys.video);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'expositions':
        setPageKey(pageKeys.exposition);
        filterArticle(pageKeys.exposition);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'appels':
        setPageKey(pageKeys.appels);
        filterArticle(pageKeys.appels);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'communiqueDePresse':
        setPageKey(pageKeys.pressRelease);
        filterArticle(pageKeys.pressRelease);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      case 'dossier':
        setPageKey(pageKeys.dossier);
        filterArticle(pageKeys.dossier);
        setIsInformative(false);
        setIsFromArticles(true);
        break;
      default:
    }
  }, [path, baseArticles, aboutUsData]);

  useEffect(() => {
    if (!filteredArticle) return
    const nameArticle = strings.removeSpaces(filteredArticle);
    console.log(nameArticle);
    const filteredData = menuElements.filter(element => strings.removeSpaces(element.Titre) === nameArticle)
    console.log({ filteredData });
    toggleDetails()
    setArticleChosen(filteredData[0]);
  }, [filteredArticle, menuElements])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200);
  }, [])

  if (isInformative) {
    return <Information
      isOpenMenu={isOpenMenu}
      data={aboutUsData}
      filterData={filterData}
      pageKey={pageKey}
    />
  }

  if (isLoading) {
    return null
  }

  if (isFromArticles) {
    return (
      !isOpenMenu && (
        <>
          {!ShowDetails && menuElements.length !== 0 ? (
            <>
              <button
                className="btn_close"
                onClick={() => {
                  router.push(`/`);
                }}
              >
                <ArrowBackIcon />
              </button>
              <h1 className="generalTitle">
                {localStorage.getItem("title")}
              </h1>
              <div
                data-simplebar
                data-simplebar-auto-hide="false"
                className="generalContent"
              >
                {menuElements.map((article) => (
                  <Link key={article.ID} href={`${path}/${article.ID}`}>
                    <li className={styles.itemArticles}>
                      <button
                        onClick={() => {
                          setShowDetails(true)
                          setArticleChosen(article);
                        }}
                      >
                        <h1>{article.Titre}</h1>
                      </button>
                    </li>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <>
              {filteredArticle &&
                <div className={styles.article}>
                  {articleChosen &&
                    <Saloncard
                      articleProp={articleChosen}
                      toggleDetails={toggleDetails}
                      setArticleChosen={setArticleChosen}
                      styles={styles}
                      path={path}
                    />
                  }
                </div>
              }
            </>
          )}
        </>
      )
    );
  }
  return <NotFound searchPath={path} />

};

export default Lesalon;
