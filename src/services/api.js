import axios from "axios";

export const fetchNews = async (query) => {
  const response = await axios
    .get
    `https://api.unsplash.com//v1/search?query=${query}&hitsPerPage=12`
    ();
  return response.data;
};
