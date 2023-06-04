<template>
    <div class="flex flex-col items-center space-y-4">

        <HomePost v-for="(display, index) in displayList" :key="index" :user_image="display.image" :username="display.name"
            :email="display.email" :product_image="display.product_image" :product_name="display.product_name"
            :price="display.price" :product_description="display.product_description"></HomePost>

    </div>
</template>

<script>
import HomePost from '../components/HomePost.vue';

import axios from 'axios';

export default {
    data() {
        return {
            displayList: [],
        }
    },
    async created() {
        try {
            //get the list of friends
            for (let i = 0; i < this.friendsList.length; i++) {
                const displayList = this.friendsList[i];
                for (let j = 0; j < displayList.items.length; j++) {
                    const url = displayList.items[j].product_url;
                    //call the api to get the product details
                    let config = {
                        method: 'get',
                        maxBodyLength: Infinity, 
                        url: url, 
                        headers: {} 
                    };

                    axios.request(config) 
                        .then((response) => {
                            if (response.status === 200) { 
                                console.log("Gift retrieved");
                                this.friendsList[i].items[j].product_image = response.data.photo;
                                this.friendsList[i].items[j].product_name = response.data.name;
                                this.friendsList[i].items[j].price = response.data.price;
                                this.friendsList[i].items[j].product_description = response.data.description;
                                let displayObject = {
                                    image: this.friendsList[i].image,
                                    name: this.friendsList[i].name, 
                                    email: this.friendsList[i].email,
                                    product_image: this.friendsList[i].items[j].product_image,
                                    product_name: this.friendsList[i].items[j].product_name,
                                    price: this.friendsList[i].items[j].price,
                                    product_description: this.friendsList[i].items[j].product_description
                                }
                                
                                this.displayList.push(displayObject);
                            }
                        })
                        .catch((error) => {
                            console.log(error);    
                        });
                } 
            } 
        } catch (error) {
            console.log(error);
        }
    },
    props: {
        friendsList: {
            type: Object,
            required: true
        }
    },
    components: {
        HomePost
    },
    
}


</script>