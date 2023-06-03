import axios from 'axios'

export async function getUserWishlists(token, userId) {
    try {
      const wishlists = await new Promise((resolve, reject) => {
        let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists',
          headers: {
            'Authorization': 'Bearer ' + token,
          }
        };
  
        axios.request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
            const filteredWishlists = response.data.filter(wishlist => wishlist.user_id === userId);
            console.log('External js w', filteredWishlists);
            resolve(filteredWishlists);
          })
          .catch((error) => {
            console.error(error);
            reject(error);
          });
      });
      console.log('External js w', wishlists);
      return wishlists;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  