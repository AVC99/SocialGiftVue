import axios from 'axios'

export async function getUserFriends(token) {
    try {
        let friendList = [];
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends',
            headers: {
                'Authorization': 'Bearer ' + token,
            },
        };

        axios.request(config)
            .then((response) => {
                for (const f of response.data) {
                    friendList.push(f);
                }
                this.friendList = friendList;
                console.log(this.friendList);
            }).catch((error) => {

                console.error(error);
            });
        return friendList;
    } catch (error) {
        console.error(error);
    }
};

export async function acceptRequest(requestId) {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + requestId,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDM5LCJlbWFpbCI6Im1hbm9saXRvb1NGQG1haWwuZXMiLCJpYXQiOjE2ODU3NDg4NDl9.7UIuNZ3wF3YshcDMgbBTrfBEUQxQEOAQ2aG89btxIv0'
        }
    };

    axios.request(config)
        .then((response) => {
          if(response.status === 200) {
            alert("Friend request accepted");
          }
        })
        .catch((error) => {
            console.log(error);
        });

};

export async function declineRequest(requestId) {
    let token = localStorage.getItem('token');
    let userId = localStorage.getItem('userId');
    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + requestId,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDM5LCJlbWFpbCI6Im1hbm9saXRvb1NGQG1haWwuZXMiLCJpYXQiOjE2ODU3NDg4NDl9.7UIuNZ3wF3YshcDMgbBTrfBEUQxQEOAQ2aG89btxIv0'
        }
    };
    axios.request(config)
    .then((response) => {
      if(response.status === 200) {
        alert("Friend request declined");
      }
    })
    .catch((error) => {
        console.log(error);
    });
};