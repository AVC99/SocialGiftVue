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
 
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + requestId,
        headers: {
            'Authorization': 'Bearer '+token,
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
    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + requestId,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };
    axios.request(config)
    .then((response) => {
      if(response.status === 200) {
        alert("Friend request declined / friend removed");
      }
    })
    .catch((error) => {
        console.log(error);
    });
};