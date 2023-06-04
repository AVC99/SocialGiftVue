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
                    <router-link to="/proile" href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font- rounded-full hover:bg-primary hover:text-black">
                        <font-awesome-icon icon="fa-solid fa-user" class="mr-4 h-6 w-6" />
                        Profile
                    </router-link>
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
                <button @click='addFriend' class="rounded-full bg-primary text-black mt-auto mx-4 p-4 drop-shadow-2xl ">
                    <font-awesome-icon icon="fa-solid fa-user-plus" class=" h-4 w-4 " />
                    Add Friend
                </button>
            </div>

            <!--Wishlist Display-->
            <WishlistDisplayF v-if="displayWishlist" :wishlist="wishlist" @close="displayWishlist = false" ></WishlistDisplayF>
            <!--CREATE WISHLIST MODAL-->
            <CreateWishlist v-if="showCreateWishlist" @close="showCreateWishlist = false" >CREATE WISH</CreateWishlist>
            <!--Tabs navigation-->
            <ul class="mb-5 flex list-none flex-row flex-wrap pl-0 p-1 pt-4 ">
                <li class="flex-auto text-center border-t-2 border-lightPrimary ml-6 ">
                    <span class="inline-block  p-4 uppercase border-t-4 border-primary text-primary ">Wishlists</span>
                </li>

            </ul>
            <!--Tabs-->
            <ul class=" grid lg:grid-cols-3  gap-3 justify-items-center  mb-6 sm:grid-cols-1 md:grid-cols-2">
                <FriendWishlistCard v-for="(wishlist, index) in wishlists" :key="index" :wishlist="wishlist"
                    @showWishlist="showWishlist" />
            </ul>

        </section>
    </body>
</template>


<script>
import FriendWishlistCard from '../components/FriendWishlistCard.vue';
import CreateWishlist from '../components/CreateWishlist.vue'
import WishlistDisplayF from '../components/WishlistDisplayF.vue';

import { logout } from '../services/userService.js';



import axios from 'axios';


export default {
    name: "Profile",
    methods: {
        changeTab(tab) {
            this.active_tab = tab;
        },
        logout() { },
        showWishlist(wishlist) {
            console.log(wishlist);
            this.wishlist = wishlist;
            this.displayWishlist = true;
        },
    },
    props: {
       id: {
            type: Number,
            required: true
        }
    },
    components: {
        FriendWishlistCard,
        CreateWishlist,
        WishlistDisplayF
    },
    async created() {
        const token = localStorage.getItem('accessToken');
        const userId = this.id;
        console.log(userId);
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


        };
    },
        data() {
            return {
                username: null,
                email: null,
                user_image: null,
                last_name: null,
                password: null,
                image_url: null,
                error: null,
                wishlists: null,
                showCreateWishlist: false,
                displayWishlist: false,
                wishlist: null,
            };
        },
    }

</script>