import axios from 'axios'

export async function getUserFriends() {
    let token = localStorage.getItem('accessToken');

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

        return axios.request(config)
            .then((response) => {
                if (response.status === 200) {
                    friendList = response.data;
                    return friendList;
                }
            }).catch((error) => {

                console.error(error);
            });

    } catch (error) {
        console.error(error);
    }
};

export async function acceptRequest(requestId) {
    let token = localStorage.getItem('accessToken');

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + requestId,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    };

    axios.request(config)
        .then((response) => {
            if (response.status === 200) {
                alert("Friend request accepted");
            }
        })
        .catch((error) => {
            console.log(error);
        });

};

export async function declineRequest(requestId) {
    let token = localStorage.getItem('accessToken');
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
            if (response.status === 200) {
                alert("Friend request declined / friend removed");
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export async function sendFriendRequest(userId) {

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/' + userId,
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
        }
    };

    axios.request(config)
        .then((response) => {
            if (response.status === 201) {
                alert("Friend request sent");
            }
        })
        .catch((error) => {
            console.log(error);
        });

};