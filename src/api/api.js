import axios from "axios";

export const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do/albums`;

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/top`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/new`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
