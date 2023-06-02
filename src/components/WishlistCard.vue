<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-xl shadow ">
        <div class="flex flex-col items-center pb-6 pt-6">
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{wishlistName}}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400 p-4">{{ description }}</span>
            <button class="rounded-full bg-primary text-black p-2 mt-2">
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
        wishlistName: {
            type: String,
            default: 'Wishlist Name', 
            required: true
        },
        description: {
            type: String,
            default: 'description: Lorem ipsum dolor sit amet cons ectetur adipisicing elit.',
            required: true
        }
    }
   
}
</script>