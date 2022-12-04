import { useEffect, useRef } from "react";
import { canvasInfo } from "../../data/canvas";
import styles from './style.module.scss'


const Canvas = () => {

  // const canvasRef = useRef(canvasInfo.canvas1);
  const canvasRef = useRef(null);
  // console.log(canvasRef);
  // const canvasObj = canvasRef.current;
  // const context1 = canvasObj.getContext('2D');

  useEffect(() => {
    canvasInfo();
  },[canvasInfo.time]);

  // canvasInfo.time

  return (
    <canvas className={styles.canvas} id='glCanvas' ref={canvasRef}/>
  );
};

export default Canvas
