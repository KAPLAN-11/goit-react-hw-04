import axios from "axios";

const API_PATH_SEARCH = "https://api.unsplash.com/search/photos/";
const API_KEY = "vYnlIxZ4wExIEN7kMXZ2TAqNcX6Rg7DMO_tAiyvlwlc";

const searchImages = async (query = "nature", page = 1, perPage = 30) => {
  const response = await axios.get(`${API_PATH_SEARCH}`, {
    params: {
      client_id: API_KEY,
      query: query,
      page: page,
      per_page: perPage,
    },
  });

  // console.log("Searched Images:", response.data.results);
  return response.data.results;
};

export default searchImages;
