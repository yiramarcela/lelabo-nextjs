/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import { MENU } from "../data/menu";

const Menu = ({
  toggleMenu,
  isOpenMenu,
  baseArticles,
  setIsOpenSubMenu,
  setFormationRouteId }) => {
  const [menu, setMenu] = useState(MENU);

  const setMenuByArticles = () => {
    setFormationMenu();
  }

  const setFormationMenu = () => {

  }

  useEffect(() => {
    if (baseArticles.length === 0) return;
    setMenuByArticles()
  }, [baseArticles]);


  // isOpenMenu=false;
  return (
    isOpenMenu && (
      <div className="menu" id="menu">
        <ul>
          {MENU.map((item) => {
            return (
              <li key={item.title} className="listItem" id="btnALaUne">
                {item.submenu ? (
                  <div
                    className="btnlistItem"
                    onClick={() => {
                      console.log('click')
                      toggleMenu();
                      setIsOpenSubMenu(prev => !prev)
                      localStorage.setItem("titleLocation", item.title)
                      localStorage.setItem(
                        "submenu",
                        JSON.stringify(item.submenu)
                      );
                    }}
                  >
                    <h1 style={{ cursor: 'pointer' }}>{item.title}</h1>
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    page={item.title}
                  >
                    <h1 onClick={() => {
                      toggleMenu();
                      localStorage.setItem("titleLocation", item.title);
                      localStorage.setItem("title", item.title);
                    }} style={{ cursor: 'pointer' }}>{item.title}</h1>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Menu
