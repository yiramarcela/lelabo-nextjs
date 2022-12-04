import Canvas from "./Canvas";
import styles from './style.module.scss'

const colorcitos = ['#FCDC34', '#FC316A', '#FC9E2D'];
let index = Math.floor(Math.random() * colorcitos.length)
let colorDeFondo = colorcitos[index];

// let bg = document.getElementById('bg');

// bg.style.background-color = colorDeFondo;

const Bg = () => (
  <>
    <Canvas />
    <div className={styles.bg} id='Bg' style={{ backgroundColor: ` ${colorDeFondo}` }}></div>
  </>
);

export default Bg
