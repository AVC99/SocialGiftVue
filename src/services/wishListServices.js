import axios from 'axios'


export async function getAllWishlists() {

  let token = localStorage.getItem('accessToken');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists',
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  };

  return axios.request(config)
    .then((response) => {
      if (response.status === 200) {
        return response.data;
      }

    })
    .catch((error) => {
      console.log(error);
    });
}


export async function getUserWishlists() {
  try {
    const userId = localStorage.getItem('userId');

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      }
    };

    return axios.request(config)
      .then((response) => {
        if (response.status === 200) {
          const filteredWishlists = response.data.filter(wishlist => wishlist.user_id == userId);
          return filteredWishlists;
        }
        
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function createWishlist(name, description, end_date) {

  let token = localStorage.getItem('accessToken');

  //Format the date to the correct format in the sql database
  const formatedDate = new Date(end_date).toISOString();

  const data = JSON.stringify({
    name: name,
    description: description,
    end_date: formatedDate,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    data: data,
  };

  axios.request(config)
    .then((response) => {
      if (response.status === 201) {
        console.log("Wishlist created");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};


export async function deleteWishlist(wishlistId) {
  let token = localStorage.getItem('accessToken');

  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + wishlistId,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
  };

  axios.request(config).then((response) => {
    if (response.status === 200) {
      console.log("Wishlist deleted");
    }
  }).catch((error) => {
    console.log(error);
  });
}

export async function getWishlistById(wishlistId) {
  let token = localStorage.getItem('accessToken');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + wishlistId,
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  };

  axios.request(config)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
}


export async function removeProductFromWishlist(wishlistId, productId) {
  let token = localStorage.getItem('accessToken');

  let wishtlist = await getUserWishlists();
  console.log(wishtlist);
  wishlist.gifts = wishlist.gifts.filter(gift => gift.id !== productId);


  let data = JSON.stringify({ wishtlist });

  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/' + wishlistId,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    data: data,
  };

  axios.request(config).then((response) => {
    if (response.status === 200) {
      console.log("Product removed from wishlist");
    }
  }).catch((error) => {
    console.log(error);
  });
}