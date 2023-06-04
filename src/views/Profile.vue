<template>
    <body class="bg-background flex divide-x divide-white ">
        <!--Left Menu Section -->
        <section class="flex flex-col items-end px-1 py-8 mx-auto space-y-5 w-2/12  h-screen max-w-s overflow-y-auto">
            <div class="text-white pr-10 py-1 h-auto w-auto">
                <div class="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img class="w-8 h-8 mr-2 " src="src\assets\appLogo.svg" alt="logo">
                    Social Gift
                </div>
                <nav class="mt-5 px-1">
                    <router-link to="/" href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font- rounded-full hover:bg-primary hover:text-black">
                        <font-awesome-icon icon="fa-solid fa-house" class="mr-4 h-6 w-6" />
                        Home
                    </router-link>
                    <router-link to="/messages" href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-full hover:bg-primary hover:text-black">
                        <font-awesome-icon icon="fa-solid fa-message" class="mr-4 h-6 w-6" />
                        Messages
                    </router-link>
                    <a href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-bold rounded-full bg-primary text-black">
                        <font-awesome-icon icon="fa-solid fa-user" class="mr-4 h-6 w-6" />
                        Profile
                    </a>
                    <a href="#" @click="logout"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-full hover:bg-primary hover:text-black">
                        <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="mr-4 h-6 w-6" />
                        Logout
                    </a>
                </nav>
                <button @click="showCreateWishlist = true"
                    class="bg-primary text-l text-black font-bold w-44 mt-6 hover:bg-yellow-500  py-2 px-4 rounded-full">
                    <font-awesome-icon icon="fa-solid fa-plus" class="mr-2 h-4 w-4 -ml-1" />
                    Create Wishlist
                </button>
            </div>
        </section>
        <!--Right/center/Main Section -->
        <section class=" w-10/12 overflow-y-auto ">
            <div class="flex flex-row mb-2 mt-6 ">
                <img class="lg:w-40 lg:h-40 mb-3 rounded-full md:w-20 md:h-20 sm:w-5 sm:h-5 shadow-lg ml-2 bg-cover"
                    :src="user_image" alt="User image" />
                <div class="flex flex-col pl-5 pr-5 items-start">
                    <h1 class="text-white text-2xl mt-auto">{{ username }}</h1>
                    <h2 class="text-gray-400 text-xl">{{ email }}</h2>
                </div>
                <!--Edit Profile Button TODO: place button correctly-->
                <button @click='editProfile = true'
                    class="rounded-full bg-primary text-black mt-auto mx-4 p-4 drop-shadow-2xl ">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" class=" h-4 w-4 " />
                    Edit Profile
                </button>
            </div>
            <!--Edit Profile PopUp-->
            <div v-if="editProfile"
                class="fixed inset-0 flex flex-col items-center justify-center bg-secondary  z-50 w-1/2 h-3/4 rounded-2xl m-auto ">
                <button @click="editProfile = false"
                    class="absolute top-2 right-2 items-center rounded-full bg-primary h-10 w-10">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </button>

                <div class="flex flex-col w-3/4 p-4 space-y-5">
                    <!--Name Input-->
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-white ">Name</label>
                        <input type="name" name="name" id="name" v-model="username"
                            class="bg-tertiary placeholder-gray-400 text-white  rounded-xl block w-full p-2"
                            placeholder="Name" required>
                    </div>
                    <!--Last Name Input-->
                    <div>
                        <label for="Last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last
                            name</label>
                        <input type="Last_name" name="Last_name" id="Last_name" v-model="last_name"
                            class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                            placeholder="Last name" required>
                    </div>
                    <!--Password Input-->
                    <div>
                        <label for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" v-model="password"
                            class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                            required>
                    </div>

                    <div>
                        <label for="user Image" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User
                            Image</label>
                        <input type="url" name="url" id="url" placeholder="url" v-model="image_url"
                            class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                            required>
                    </div>
                </div>
                <!--Submit Button-->
                <button @click="modifyProfile" type="submit"
                    class="w-1/2 text-black font-bold bg-primary  rounded-full text-sm px-5 py-2.5 text-center ">
                    Modify Profile
                </button>
                <button @click="deleteProfile" type="submit"
                    class="w-1/2 text-white font-bold bg-red-800 rounded-full text-sm px-5 py-2.5 text-center mt-2 ">
                    Delete Profile
                </button>

            </div>
            <!--Wishlist Display-->
            <WishlistDisplay v-if="displayWishlist" :wishlist="wishlist" @close="displayWishlist = false" />
            <!--CREATE WISHLIST MODAL-->
            <CreateWishlist v-if="showCreateWishlist" @close="showCreateWishlist = false"/>
            <!--Tabs navigation-->
            <ul class="mb-5 flex list-none flex-row flex-wrap pl-0 p-1 pt-4 ">
                <li class="flex-auto text-center border-t-2 border-lightPrimary ml-6 ">
                    <a href="#" @click="changeTab('wishlist')" class="inline-block  p-4 uppercase"
                        :class="{ 'border-transparent text-white': active_tab != 'wishlist', 'border-t-4 border-primary text-primary': active_tab === 'wishlist' }">Wishlists</a>
                </li>
                <li class="flex-auto text-center   border-t-2 border-lightPrimary mr-6 ">
                    <a href="#" @click="changeTab('friends')" class="inline-block p-4  uppercase"
                        :class="{ 'border-transparent text-white': active_tab != 'friends', 'border-t-4 border-primary text-primary': active_tab === 'friends' }">Friends</a>
                </li>
            </ul>
            <!--Tabs-->
            <ul v-if="active_tab === 'wishlist'"
                class=" grid lg:grid-cols-3  gap-3 justify-items-center  mb-6 sm:grid-cols-1 md:grid-cols-2">
                <WishlistCard v-for="(wishlist, index) in wishlists" :key="index" :wishlist="wishlist" @showWishlist="showWishlist" />


            </ul>
            <ul v-if="active_tab === 'friends'"
                class=" grid lg:grid-cols-3  gap-3  justify-items-center mb-6 sm:grid-cols-1 md:grid-cols-2 ">
                <FriendCard v-for="(friend, index) in friendList" :key="index" :user="friend" />
            </ul>
        </section>
    </body>
</template>

<script>
import FriendCard from '../components/FriendCard.vue';
import WishlistCard from '../components/WishlistCard.vue';
import CreateWishlist from '../components/CreateWishlist.vue'

import { modifyProfile, logout } from '../services/userService.js';
import {getUserFriends} from '../services/friendService.js';
import {getUserWishlists} from '../services/wishListServices.js';

import axios from 'axios';
import WishlistDisplay from '../components/WishlistDisplay.vue';

export default {
    name: "Profile",
    methods: {
        changeTab(tab) {
            this.active_tab = tab;
        },
        deleteProfile() {
            const token = localStorage.getItem('accessToken');
            let data = '';

            let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                data: data
            };
            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        async modifyProfile() {
            try {
                await modifyProfile.call(this, this.username, this.last_name, this.email, this.password, this.image_url);
            } catch (error) {
                this.error = error.response.data.message;
                console.log(this.error);
            }
        },
        logout(){},
        showWishlist(wishlist) {
            console.log(wishlist);
            this.wishlist = wishlist;
            this.displayWishlist = true;
        },
    },
    components: {
    FriendCard,
    WishlistCard,
    CreateWishlist,
    WishlistDisplay
},
    async created() {
        const token = localStorage.getItem('accessToken');
        const userId = localStorage.getItem('userId');
        if (!token) {
            console.log('No token');
            this.$router.push("/login");
        } else {

            //Get the user information 
            try {
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/' + userId,
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                };
                axios.request(config)
                    .then((response) => {
                        console.log(response.data);
                        this.user_image = response.data.image;
                        this.username = response.data.name;
                        this.last_name = response.data.last_name;
                        this.email = response.data.email;
                        this.image_url = response.data.image;

                    }).catch(function (error) {
                        console.error(error);
                    });

            } catch (error) {
                console.log(error);
            }
            
            //Get the user wishlists
            try {
                let wishlists = [];
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/wishlists/',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                };
                axios.request(config)
                    .then((response) => {
                        for (let i = 0; i < response.data.length; i++) {
                            if (response.data[i].user_id == userId) {
                                console.log(response.data[i]);
                                wishlists.push(response.data[i]);
                            }
                        }
                        this.wishlists = wishlists;
                        console.log(this.wishlists);

                    }).catch(function (error) {
                        console.error(error);
                    });

            } catch (error) {
                console.log(error);
            }


            //Get the user friends 
            try{
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                };
                axios.request(config)
                    .then((response) => {
                        this.friendList=response.data;
                        console.log(this.friendList);

                    }).catch(function (error) {
                        console.error(error);
                    });

            }catch(error){
                console.log(error);
            }
        }


    },
    data() {
        return {
            editProfile: false,
            username: null,
            email: null,
            user_image: null,
            active_tab: "wishlist",
            last_name: null,
            password: null,
            image_url: null,
            error: null,
            wishlists: null,
            friendList: null,
            showCreateWishlist: false,
            displayWishlist: false,
            wishlist: null,
        };
    },
}
</script>