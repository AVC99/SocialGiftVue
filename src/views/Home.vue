<template>
    <body class="h-screen overflow-hidden bg-background flex divide-x divide-white">
        <!--Left Section / menu Bar -->
        <section class="flex flex-col items-end px-1 py-8 mx-auto space-y-5 w-2/12 bg-transparent h-screen max-w-s">
            <div class="text-white pr-10 py-1 h-auto w-auto">
                <div class="flex items-center mb-6 text-2xl font-semibold text-white">
                    <img class="w-8 h-8 mr-2 " src="src\assets\appLogo.svg" alt="logo">
                    Social Gift
                </div>
                <nav class="mt-5 px-1">
                    <router-link to="/" href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-bold rounded-full bg-primary text-black">
                        <font-awesome-icon icon="fa-solid fa-house" class="mr-4 h-6 w-6" />
                        Home
                    </router-link>
                    <router-link to="/messages" href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-full hover:bg-primary hover:text-black">
                        <font-awesome-icon icon="fa-solid fa-message" class="mr-4 h-6 w-6" />
                        Messages
                    </router-link>
                    <router-link to="/profile"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-full hover:bg-primary hover:text-black">
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

        <!--Center Secton make this a v-for when I have results from API Add space-y-{nitems+1}-->
        <section class="min-h-screen overflow-y-auto px-6  mx-auto space-y-4 w-7/12 mt-8 no-scrollbar">
            <!--CREATE WISHLIST MODAL-->
            <CreateWishlist v-if="showCreateWishlist" @close="showCreateWishlist = false"/>

            <!--POSTS SECTION-->
            <PostSection v-if="activeSection === 'posts'"></PostSection>

            <!--CONSIDER MAKING THIS A NEW ROUTE-->
            <SearchSection v-if="activeSection === 'search'"></SearchSection>
        </section>
        <!--Right Section / mini profile and idk-->
        <section class="flex flex-col items-center w-3/12">
            <SearchBar class="pt-2 pb-2"></SearchBar>
            <ProfileCard :user_image="user_image" :username="username" :email="mail"></ProfileCard>
            <NotificationsCard :requestList="requestList"></NotificationsCard>
        </section>
    </body>
</template>

<script>
import HomePost from '../components/HomePost.vue';
import ProfileCard from '../components/ProfileCard.vue';
import SearchBar from '../components/SearchBar.vue';
import NotificationsCard from '../components/NotificationsCard.vue';
import PostSection from '../components/PostSection.vue';
import SearchSection from '../components/SearchSection.vue';
import CreateWishlist from '../components/CreateWishlist.vue';

import axios from 'axios';


export default {
    name: 'Home',
    components: {
        HomePost,
        ProfileCard,
        SearchBar,
        NotificationsCard,
        PostSection,
        SearchSection,
        CreateWishlist,
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

                        this.user_image = response.data.image;
                        this.username = response.data.name;
                        this.mail = response.data.email;

                    }).catch(function (error) {
                        console.error(error);
                    });

            } catch (error) {
                console.log(error);
            }

            //Get the user Notifications
            try{
                let requestList = [];
                let config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/friends/requests',
                    headers: {
                        'Authorization': 'Bearer ' + token,
                    }
                };
                axios.request(config)
                    .then((response) => {
                        for(let request of response.data){
                            requestList.push(request);
                        }
                        this.requestList=requestList;
                        console.log(this.requestList);
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
            user_image: null,
            username: null,
            mail: null,
            requestList: null,
            product_image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896',
            product_name: 'Product Name',
            price: 999,
            product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
            activeSection: 'posts',
            showCreateWishlist: false,

        };
    },
    methods: {
        logout: function () {
            alert("Loging out");
            //Remove the token from the local storage
            localStorage.removeItem('accessToken');
            localStorage.removeItem('userId');
            this.$router.push("/login");
        }
    }
};
</script>