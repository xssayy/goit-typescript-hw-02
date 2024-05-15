import { GalleryItem } from "../ImageCard/ImageCard.types";

export type Props = {
  items: GalleryItem[];
  openModal: (arg: GalleryItem) => void;
};
