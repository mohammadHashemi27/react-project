import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api", 
  params: {
    key: "66aa294028d0476ea552012b99adad79",
  },
});
