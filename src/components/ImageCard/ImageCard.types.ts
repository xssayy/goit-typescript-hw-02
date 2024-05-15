export type GalleryItem = {
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  id?: string;
};

export type Props = {
  item: GalleryItem;
  openModal: (arg: GalleryItem) => void;
};
