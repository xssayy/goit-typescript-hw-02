import style from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { GalleryItem } from "../ImageCard/ImageCard.types";
import { Props } from "./ImageGallery.types";

const ImageGallery = ({ items, openModal }: Props) => {
  return (
    <>
      {items.length > 0 && (
        <div>
          <ul className={style.gallery}>
            {items.map((item: GalleryItem) => (
              <li key={item.id}>
                <ImageCard item={item} openModal={openModal} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
