import { RotatingLines } from "react-loader-spinner";
import style from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={style.loaderWrapper}>
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loader;
