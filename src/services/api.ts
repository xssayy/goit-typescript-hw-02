import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
export const getData = async (query: string, page: number) => {
  const response = await axios.get("", {
    params: {
      client_id: "RYfnsD_OSWqdJOknKnh_kbmhW4zYn8qLrrzs1hxPv5o",
      query,
      page,
    },
  });

  return response.data;
};
