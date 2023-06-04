import axios from 'axios'
import router from '../router.js'

export async function modifyProfile(username, last_name, email, password, image_url) {
  
  try {
    const token = localStorage.getItem('accessToken');
    const userInfo = JSON.stringify({
      name: username,
      last_name: last_name,
      email: email,
      password: password,
      image: image_url,
    });
    console.log(userInfo);
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      data: userInfo,
    };

    const response = await axios.request(config);

    // close the PopUp
    this.editProfile = false;
    alert('User correctly modified');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export function logout() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('userId');
  router.push('/login');
}