import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Submenu = ({ isOpenMenu, setIsOpenSubMenu }) => {
  const [submenuItems, setSubmenuItems] = useState([])
  const router = useRouter()

  useEffect(() => {
    setSubmenuItems(JSON.parse(window.localStorage.getItem("submenu")))
  }, [])

  return !isOpenMenu && (
    <div className="container">
      <ul className='sectionList'>
        {submenuItems.map((item) => {
          return (
            <li key={item.title} className="sousSection" onClick={() => {
                window.localStorage.setItem("title", item.title)
                setIsOpenSubMenu(prev => !prev)
                router.push(item.path)
              }}>
                <h1>{item.title}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Submenu
