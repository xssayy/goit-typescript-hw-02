import axios, { AxiosResponse } from "axios";
import { GalleryItem } from "../components/ImageCard/ImageCard.types";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
interface UnsplashResponse {
  results: GalleryItem[];
  total: number;
  total_pages: number;
}

export const getData = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const response: AxiosResponse<UnsplashResponse> = await axios.get("", {
    params: {
      client_id: "RYfnsD_OSWqdJOknKnh_kbmhW4zYn8qLrrzs1hxPv5o",
      query,
      page,
    },
  });

  return response.data;
};
