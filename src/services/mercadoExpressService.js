import axios from "axios";

export async function searchProducts(searchQuery){
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/mercadoexpress/api/v1/products/search?s='+searchQuery,
        headers: { }
      };

      return axios.request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
};