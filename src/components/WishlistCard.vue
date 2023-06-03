<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-xl shadow min-w-20 ">
        <div class="flex flex-col items-center pb-6 pt-6">
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ wishlist.name}}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400 p-4">{{ wishlist.description }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 p-4">Gifts : {{ wishlist.gifts.length }}</span>
            <button @click="showWishlist" class="rounded-full bg-primary text-black p-2 mt-2">
                <font-awesome-icon icon="fa-solid fa-eye" class=" h-4 w-4 " />
                View Wishlist
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WishlistCard',
    props: {
        wishlist: {
            type: Object,
            required: true,
            default: () => {
                return {
                   name: 'Wishlist Name',
                    description: 'Description',
                }
            }
        },
    },
    methods:{
        showWishlist(){
            //TODO: Show wishlist
            console.log("Show Wishlist");
            console.log(this.wishlist.name);
            console.log(this.wishlist.description);
        }
    }
   
}
</script>