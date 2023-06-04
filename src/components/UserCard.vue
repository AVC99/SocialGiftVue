<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-2xl shadow ">
        <div class="flex flex-col items-center pb-10 pt-10">
            <!-- User information -->
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="user.image" alt="User image" />
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ user.name }}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ user.email }}</span>
            <!-- Buttons -->
            <div class="flex flex-row mt-2 space-x-2">
                <button @click="friendProfile" class="rounded-full bg-primary text-bl p-2 ">
                    <font-awesome-icon icon="fa-solid fa-eye" class="h-4 w-4" />
                    View Profile
                </button>
                <button @click="addFriend" class="rounded-full bg-primary text-bl p-2">
                    <font-awesome-icon icon="fa-solid fa-user-plus" class=" h-4 w-4" />
                    Add Friend
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import{sendFriendRequest} from '../services/friendService.js';

export default {
    name: 'UserCard',
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
       async addFriend() {
            console.log("Add friend");
            console.log(this.user.id);
           await sendFriendRequest(this.user.id);

        },
        friendProfile() {
            console.log("Friend profile");
            console.log(this.user.id);
            this.$router.push({ name: 'friend', params: { id: this.user.id } });
        }
    }
}
</script>
