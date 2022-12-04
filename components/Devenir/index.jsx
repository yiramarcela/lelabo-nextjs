import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styles from './style.module.scss'
import clsx from "clsx";
import useInfoPagesData from "../../hooks/useInfoPagesData";
import { useRouter } from "next/router";

const Devenir = ({ isOpenMenu, data, filterData, pageKey }) => {
  const devenirPageData = useInfoPagesData(data, filterData, pageKey);
  const router = useRouter()

  return (
    !isOpenMenu && (
      <div className="principal">
        <button
          className="btn_close"
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBackIcon />
        </button>
        <div className={clsx([styles.devenir__container, "detail"])}>
          <h2>Devenir</h2>
          <p>Cliquez sur le bouton pour ouvrir le formulaire</p>
          <a
            className={styles.link}
            href={devenirPageData.Contenu}
            target='_blank'
            rel="noreferrer">
            <button
              className={styles.devenir__button}
            >
              <p className={styles.devenir__button__text}>
                {devenirPageData.Name}
              </p>
            </button>
          </a>
        </div>
      </div>
    )
  );
};

export default Devenir;