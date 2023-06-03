<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-xl shadow ">
        <div class="flex flex-col items-center pb-6 pt-6">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
                :src="user.image"
                alt="User image" />
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{user.name}}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</span>
            <button @click="removeFriend" class="rounded-full bg-primary text-black p-2 mt-2">
                <font-awesome-icon icon="fa-solid fa-user-minus" class=" h-4 w-4 " />
                Remove Friend
            </button>
        </div>
    </div>
</template>

<script>
import { declineRequest } from '../services/friendService';


export default {
    name: 'FriendCard',
    props: {
        user: {
            type: Object,
            required: true,
            default: () => {
                return {
                    user_image: 'https://freesvg.org/img/abstract-user-flat-4.png',
                    name: 'Username',
                    email: 'email',
                }
            }
        },
    }, 
    methods: {
        removeFriend(){
            declineRequest(this.user.id);
        }
    }
   
}

</script>