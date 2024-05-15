import style from "./ImageCard.module.css";
import { Props } from "./ImageCard.types";

const ImageCard = ({ item, openModal }: Props) => {
  return (
    <div>
      <img
        className={style.galleryItem}
        src={item.urls.small}
        alt={item.alt_description}
        onClick={() => openModal(item)}
      />
    </div>
  );
};

export default ImageCard;
