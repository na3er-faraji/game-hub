import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e8cdfe442631427c9261312c90e04166",
  },
});
