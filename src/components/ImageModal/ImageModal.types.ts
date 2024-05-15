import { GalleryItem } from "../ImageCard/ImageCard.types";

export type Props = {
  isOpen: boolean;
  selectedImage: GalleryItem | null;
  setIsOpen: (arg: boolean) => void;
};
