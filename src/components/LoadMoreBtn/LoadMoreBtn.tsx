import style from "./LoadMoreBtn.module.css";
import { Props } from "./LoadMoreBtn.types";

const LoadMoreBtn = ({ handleLoadMore }: Props) => {
  return (
    <>
      <button className={style.loadMoreBtn} onClick={handleLoadMore}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreBtn;
