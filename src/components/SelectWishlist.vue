<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center bg-secondary z-50 w-1/4 h-2/4 rounded-2xl m-auto ">
        <button @click="close" class="absolute top-2 right-2 items-center rounded-full bg-primary h-10 w-10">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>

        <div class="flex flex-col w-5/6 p-4 overflow-y-scroll gap-2 no-scrollbar">
            <!--Products Display-->
            <WishlistSelector v-for="(wishlist, index) in wishlists" :key="index" :wishlist="wishlist" 
            :productId="productId"></WishlistSelector>
           
        </div>
    </div>
</template>
    
<script>
import DisplayProductCard from './DisplayProductCard.vue';
import WishlistSelector from './WishlistSelector.vue';

import {getUserWishlists} from '../services/wishListServices.js';

export default {
    name: 'SelectWishlist',
    data() {
        return {
          wishlists: null,
        }
    },
    async created() {
        try{
            this.wishlists = await getUserWishlists();
           
        }catch(error){
            console.log(error);
        }


    },
    methods: {
        close() {
            this.$emit('close');
        }
    },
    components: {
        DisplayProductCard,
        WishlistSelector
    }, 
    props: {
        productId: {
            type: Number,
            required: true
        }
    }
}

</script>