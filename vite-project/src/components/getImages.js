import axios from "axios";

const API_PATH = "https://api.unsplash.com/photos/";
const API_KEY = "vYnlIxZ4wExIEN7kMXZ2TAqNcX6Rg7DMO_tAiyvlwlc";

const fetchRandomImages = async () => {
  const response = await axios.get(`${API_PATH}`, {
    params: {
      client_id: API_KEY,
    },
  });
  return response.data;
};

export default fetchRandomImages;
// This function fetches random images from the Unsplash API.
