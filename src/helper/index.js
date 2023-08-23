import axios from "axios"
const baseURL = "https://fakestoreapi.com";

export const getItem = async () => {
    const config = {
        method: "GET",
        url: `${baseURL}/products`,
      };
    
      try {
        const result = await axios(config);
        if (result && result?.data) {
          return result.data;
        }
      } catch (error) {
        console.log("Login error:", error);
      }
};