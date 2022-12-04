import { useState, useEffect } from "react";
import styles from './style.module.scss'
import clsx from "clsx";
import Link from "next/link";

const Navbar = ({ toggleMenu, isOpenMenu }) => {
  const [title, setTitle] = useState("");
  const [titleLocation, setTitleLocation] = useState('')
  /* useEffect(() => {
    if (isOpenMenu) {
      setTitle(window.localStorage.setItem("titleLocation", ""));
    } else {
      setTitle(window.localStorage.getItem("titleLocation"));
    }
  }, [isOpenMenu]); */

  useEffect(() => {
    setTitleLocation(window.localStorage.getItem("titleLocation"))
  }, [])

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logolabo}></div>
      </Link>
      <h3 className={styles.sectiontitle}>{titleLocation}</h3>
      {/* <div className="searchItem" >
        <input type="text" name="" id="recherche" placeholder="" />
        <SearchIcon className="icon" fontSize="medium"/>

      </div> */}
      <div
        className={clsx({
            [styles['burger']]: true,
            [styles['burger--close']]: isOpenMenu
        })}
        onClick={toggleMenu}
      >
        <div className={styles.burger__patty}></div>
      </div>
    </header>
  );
};

export default Navbar
