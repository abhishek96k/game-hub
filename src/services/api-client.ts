import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d5730fceae0045c8b1243d98abc5b525",
  },
});
