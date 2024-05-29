/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2db754535c9e4631a037adfd230d4478",
  },
});
