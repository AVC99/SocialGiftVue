<template>
    <div class="flex flex-row  justify-between items-center h-auto space-x-3 bg-tertiary rounded-2xl p-2">
        <div class=" px-1 py-1">
            <img class="h-14 w-14 rounded-full"
                :src="gift.photo"
                alt="Profile picutre">
        </div>
        <div class="ml-3">
            <div class="text-sm font-medium text-white">  {{gift.name}} </div>
            <div class="text-sm font-medium text-gray-400"> {{gift.description}} </div>
        </div>
        <button @click="removeProduct" class=" items-center rounded-full bg-primary h-10 w-10">
            <font-awesome-icon icon="fa-solid fa-trash" />
        </button>
    </div>
</template>

<script>
import {deleteGift} from '../services/giftServices.js';
import axios from 'axios';

export default {
    name: "DisplayProductCard",
    data() {
        return {
            gift: '',
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        },
    },
    async created() {
        try {
          
            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: this.product.product_url,
                headers: {  }
            };

            axios.request(config)
                .then((response) => {
                    if (response.status === 200) {
                        console.log("Gift retrieved");
                        this.gift = response.data;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }


    },
    methods: {
        async removeProduct() {
            try {
                await deleteGift(this.product.id).then(() => {
                    location.reload();
                    alert("Product removed");
                });
            } catch (error) {
                console.log(error);
            }
        }
    },
}
</script>