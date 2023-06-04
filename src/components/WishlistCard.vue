<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-xl shadow min-w-20 ">
        <div class="flex flex-col items-center pb-6 pt-6">
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ wishlist.name }}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400 p-4">{{ wishlist.description }}</span>
            <span class="text-sm text-gray-500 dark:text-gray-400 p-4">Gifts : {{ wishlist.gifts.length }}</span>
            <div class="flex flex-row space-x-2 ">
                <button @click="handleShowWishlist" class="rounded-full bg-primary text-black p-2 mt-2">
                    <font-awesome-icon icon="fa-solid fa-eye" class=" h-4 w-4 " />
                    View Wishlist
                </button>
                <button @click="deleteWishlist" class="rounded-full bg-red-500 text-white p-2 mt-2">
                    <font-awesome-icon icon="fa-solid fa-trash" class=" h-4 w-4 " />
                    Delete Wishlist
                </button>
            </div>

        </div>
    </div>
</template>

<script>
import { deleteWishlist } from '../services/wishListServices';

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
    methods: {
        handleShowWishlist() {
            //emit event to parent
            this.$emit('showWishlist', this.wishlist);
        },
        async deleteWishlist() {
            try {
                await deleteWishlist(this.wishlist.id)
                    .then(() => {
                        location.reload();
                        alert("Wishlist deleted");
                    });
            } catch (error) {
                this.error = error.response.data.message;
                console.log(this.error);
            }
        },
    }

}
</script>