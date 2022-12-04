import React from "react";
import CloseIcon from "@mui/icons-material/Close";
/* import { useLocation } from "react-router"; */
/* import { useNavigate } from "react-router-dom" */

import SimpleBar from "simplebar-react";
import { info } from "../data/infoabout";

import useInfoPagesData from "../hooks/useInfoPagesData";
import { useRouter } from "next/router";

export const Information = ({ data, filterData, pageKey }) => {
  const router = useRouter()
  const pageData = useInfoPagesData(data, filterData, pageKey);

  return (
    <div className="info">
      <button
        className="btn_close"
        onClick={() => {
          router.back();
        }}
      > <CloseIcon />
      </button>

      <h1>{pageData.Name}</h1>
      <SimpleBar className="simpleContainer">
        <p className='articleText'>{pageData.Contenu}</p>
      </SimpleBar>
    </div>
  );
};
