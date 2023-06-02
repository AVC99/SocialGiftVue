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
                <button
                    class="bg-primary text-l text-black font-bold w-44 mt-6 hover:bg-yellow-500  py-2 px-4 rounded-full">
                    <font-awesome-icon icon="fa-solid fa-plus" class="mr-2 h-4 w-4 -ml-1" />
                    Create Wishlist
                </button>
            </div>
        </section>
        <!--Right/center/Main Section -->
        <section class=" w-10/12 overflow-y-auto ">
            <div class="flex flex-row mb-2 mt-6 ">
                <img class="w-1/6 h-1/6 mb-3 rounded-full shadow-lg" src="https://freesvg.org/img/abstract-user-flat-4.png"
                    alt="User image" />
                <div class="flex flex-col pl-5 pr-5 items-start">
                    <h1 class="text-white text-2xl mt-auto">Username</h1>
                    <h2 class="text-gray-400 text-xl">mail@email.com</h2>
                </div>
                <!--Edit Profile Button TODO: place button correctly-->
                <button class="rounded-full bg-primary text-black mt-auto mx-4 p-4 ">
                    <font-awesome-icon icon="fa-solid fa-pen-to-square" class=" h-4 w-4 " />
                    Edit Profile
                </button>

            </div>

            <!--Tabs navigation-->
            <ul class="mb-5 flex list-none flex-row flex-wrap pl-0 p-1 pt-4 ">
                <li class="flex-auto text-center border-t-2 border-lightPrimary ml-6 ">
                    <a href="#" @click="changeTab('wishlist')" class="inline-block  p-4 uppercase"
                        :class="{ 'border-transparent text-white': active_tab != 'wishlist', 'border-t-4 border-primary text-primary': active_tab === 'wishlist' }">Wishlists</a>
                </li>
                <li class="flex-auto text-center   border-t-2 border-lightPrimary mr-6">
                    <a href="#" @click="changeTab('friends')" class="inline-block p-4  uppercase"
                        :class="{ 'border-transparent text-white': active_tab != 'friends', 'border-t-4 border-primary text-primary': active_tab === 'friends' }">Friends</a>
                </li>
            </ul>
            <!--Tabs-->
            <div v-if="active_tab === 'wishlist'" class=" grid grid-cols-3  gap-3 justify-items-center  mb-6">
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
                <WishlistCard class="" />
            </div>
            <div v-if="active_tab === 'friends'" class=" grid grid-cols-3  gap-3  justify-items-center mb-6 ">
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
                <FriendCard class="" />
            </div>
        </section>
    </body>
</template>

<script>
import FriendCard from '../components/FriendCard.vue';
import WishlistCard from '../components/WishlistCard.vue';

export default {
    name: "Profile",
    data() {
        return {
            user_image: "https://freesvg.org/img/abstract-user-flat-4.png",
            active_tab: "wishlist",
        };
    },
    methods: {
        changeTab(tab) {
            this.active_tab = tab;
        },
        logout: function () {
            alert("Loging out");
            this.$router.push("/login");
        }
    },
    components: { FriendCard, WishlistCard }
}
</script>