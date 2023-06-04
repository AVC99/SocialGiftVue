<template>

    <div class="fixed inset-0 flex flex-col items-center justify-center bg-secondary z-50 w-1/2 h-3/4 rounded-2xl m-auto ">
            <button @click="close" class="absolute top-2 right-2 items-center rounded-full bg-primary h-10 w-10">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
    
            <div class="flex flex-col w-3/4 p-4 overflow-y-scroll gap-2 no-scrollbar">
                <!--Products Display-->
              <DisplayProductCardF v-for="(gift, index) in gifts" :key="index" :product="gift"></DisplayProductCardF>
            </div>
        </div>
    </template>
    
    <script>
    import DisplayProductCardF from './DisplayProductCardF.vue';
    
    
    export default  {
        name: 'WishlistDisplayF',
        data() {
            return {
                gifts: null,         
            }
        },
        async created() {
            this.gifts = this.wishlist.gifts;
            console.log(this.wishlist.gifts);
            console.log(this.gifts);
        },
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
            close(){
                this.$emit('close');
            }
        },
        components: {
            DisplayProductCardF,
        }
    }
    
    </script>