import Api from "utils/api";

const API_BASE = "https://api.themoviedb.org/3";
const API_KEY = "24e86fd3ab5e08a56b024d5637c5eb6f";

const tmdbApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: API_KEY },
});

export default tmdbApi;
