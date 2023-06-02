<template>
    <body class="h-screen overflow-hidden bg-background flex divide-x divide-white">
        <!--Header-->
        <header></header>
        <!--Left Section / menu Bar -->
        <section class="flex flex-col items-end px-1 py-8 mx-auto space-y-5 w-1/5 bg-transparent h-screen max-w-s">
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
                    <a href="#"
                        class="mt-2 group flex items-center px-2 py-3 text-lg leading-6 font-medium rounded-full hover:bg-primary hover:text-black">
                        <font-awesome-icon icon="fa-solid fa-message" class="mr-4 h-6 w-6" />
                        Messages
                    </a>
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
                <button
                    class="bg-primary text-l text-black font-bold w-44 mt-6 hover:bg-yellow-500  py-2 px-4 rounded-full">
                    <font-awesome-icon icon="fa-solid fa-plus" class="mr-2 h-4 w-4 -ml-1" />
                    Create Wishlist
                </button>
            </div>
        </section>

        <!--Center Secton make this a v-for when I have results from API Add space-y-{nitems+1}-->
        <section class="min-h-screen overflow-y-auto px-6  mx-auto space-y-4 w-1/2 mt-8 no-scrollbar">
            <div class="flex flex-col items-center space-y-4">
                <HomePost :user_image="user_image" :username="username" :email="mail" :product_image="product_image"
                :product_name="product_name" :price="price" :product_description="product_description"></HomePost>
                <HomePost :user_image="user_image" :username="username" :email="mail" :product_image="product_image"
                :product_name="product_name" :price="price" :product_description="product_description"></HomePost>
                <HomePost :user_image="user_image" :username="username" :email="mail" :product_image="product_image"
                :product_name="product_name" :price="price" :product_description="product_description"></HomePost>
                <HomePost :user_image="user_image" :username="username" :email="mail" :product_image="product_image"
                :product_name="product_name" :price="price" :product_description="product_description"></HomePost>
            </div>
           
        </section>
        <!--Right Section / mini profile and idk-->
        <section class="flex flex-col items-center w-1/4 bg-green-500">
            <SearchBar class="pt-2 pb-2"></SearchBar>
            <ProfileCard :user_image="user_image" :username="username" :email="mail"></ProfileCard>
            <NotificationsCard></NotificationsCard>
        </section>
    </body>
</template>

<script>
import HomePost from '../components/HomePost.vue';
import ProfileCard from '../components/ProfileCard.vue';
import SearchBar from '../components/SearchBar.vue';
import NotificationsCard from '../components/NotificationsCard.vue';


export default {
    name: 'Home',
    components: {
        HomePost,
        ProfileCard,
        SearchBar, 
        NotificationsCard
    },
    data() {
        return {
            user_image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            username: 'Username',
            mail: 'mail@mail.com',
            product_image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896',
            product_name: 'Product Name',
            price: 999,
            product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        };
    },
    methods: {
        logout: function () {
            alert("Loging out");
        }
    }
};
</script>