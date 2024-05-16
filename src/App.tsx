import { useEffect, useState } from "react";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { getData } from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import { GalleryItem } from "./components/ImageCard/ImageCard.types";

function App() {
  const [gallery, setGallery] = useState<GalleryItem[] | []>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [maxPage, setMaxPage] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  //=====
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const openModal = (image: GalleryItem): void => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const onSubmit = (newQuery: string) => {
    if (newQuery === query) {
      return;
    }
    setPage(1);
    setGallery([]);
    setQuery(newQuery);
  };
  //=========

  useEffect(() => {
    if (!query || page === null || page === undefined) {
      return;
    }
    const fetchData = async () => {
      setLoader(true);
      setError(false);

      try {
        const response = await getData(query, page);

        if (!response || !response.total) {
          toast.error("No results were found:( Try again!", {
            duration: 2000,
            position: "top-right",
          });
          setError(true);
          return;
        }

        const newImages = response.results;
        setGallery((prevImages) => [...prevImages, ...newImages]);
        const totalPages = response.total_pages;
        setMaxPage(totalPages);
      } catch (err) {
        console.log("Error: ", err);
        toast.error(
          "An error occurred while fetching data. Please try again later.",
          {
            duration: 2000,
            position: "top-right",
          }
        );
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleLoadMore = async () => {
    setPage(page + 1);
    scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });

    if (page === maxPage) {
      toast.error("You've reached the end of collection!", {
        duration: 2000,
        position: "top-right",
      });
    }
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {loader && page < 2 && <Loader />}
      {gallery.length > 0 && (
        <ImageGallery items={gallery} openModal={openModal} />
      )}
      {loader && page > 1 && <Loader />}
      {gallery.length > 0 && page !== maxPage && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {error && <ErrorMessage />}

      <ImageModal
        selectedImage={selectedImage}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Toaster />
    </>
  );
}

export default App;
