const { default: axios } = require("axios");
const URL = process.env.NEXT_PUBLIC_APP_URL;
const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;
export const fetchApi = axios.create({
    baseURL:URL,
    headers: {
        Authorization: `bearer ${TOKEN}`,
      }
})
 

