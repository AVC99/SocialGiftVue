<template>
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
</template>

<script>
import HomePost from '../components/HomePost.vue';
export default {
    data() {
        return {
            user_image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
            username: 'Username',
            mail: 'mail@mail.com',
            product_image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896',
            product_name: 'Product Name',
            price: 999,
            product_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',

        }
    },
    components: {
        HomePost
    }
}


</script>