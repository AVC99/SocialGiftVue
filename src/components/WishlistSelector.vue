<template>
    <div class="flex flex-row  justify-between items-center h-auto space-x-2 bg-tertiary rounded-2xl p-2">
        <div class="ml-3">
            <div class="text-sm font-medium text-white">  {{wishlist.name}}  </div>
            <div class="text-sm font-medium text-gray-400"> {{wishlist.description}} </div>
        </div>
        <button @click="addToWishlist" class=" items-center rounded-full bg-primary h-10 w-10">
            <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
    </div>
</template>

<script>
import axios from 'axios';
import { postGiftByID } from '../services/giftServices.js';


export default {
    name: "WishlistSelector",
    data() {
        return {
            gift: '', 
        }
    },
    props: {
        wishlist: {
            type: Object,
            required: true
        },
        productId: {
            type: Number,
            required: true
        }
    },
    methods: {
        async addToWishlist() {
            try {
                await postGiftByID(this.wishlist.id ,this.productId, 1).then(() => {
                    alert("Product added to wishlist!");
                });
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>