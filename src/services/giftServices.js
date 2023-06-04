import axios from 'axios'

export async function getGiftById(giftId) {
  let token = localStorage.getItem('accessToken');
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/' + giftId,
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  };

  axios.request(config)
    .then((response) => {
      if (response.status === 200) {
        console.log("Gift retrieved");
        return response.data;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function deleteGift(giftId) {

  let token = localStorage.getItem('accessToken');

  console.log(giftId);
  let config = {
    method: 'delete',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/' + giftId,
    headers: {
      'Authorization': 'Bearer ' + token,
    }
  };
  console.log(config.url);
  axios.request(config)
    .then((response) => {
      if (response.status === 200) {
        console.log("Gift deleted");
      }
    })
    .catch((error) => {
      console.log(error);
    });

};

export async function postGift(wishlistId, productURL, priority) {
  let token = localStorage.getItem('accessToken');

  const data = JSON.stringify({
    wishlist_id: wishlistId,
    product_url: productURL,
    priority: priority,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
    },
    data: data,
  };

  axios.request(config)
    .then((response) => {
      if (response.status === 201) {
        console.log("Gift created");
      }
    })
    .catch((error) => {
      console.log(error);
    });

};

export async function bookGift(giftId) {
  
  try {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/gifts/' + giftId + '/book',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
      }
    };

    axios.request(config)
      .then((response) => {
        if (response.status === 200) {
          console.log("Gift booked");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
}