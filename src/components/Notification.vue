<template>
    <div class="flex flex-row  justify-between items-center h-auto space-x-3 bg-tertiary rounded-2xl p-2">
        <div class=" px-1 py-1">
            <img class="h-12 w-12 rounded-full" :src="user.image" alt="Profile picutre">
        </div>
        <div class="ml-3">
            <div class="text-sm font-medium text-white"> {{ user.name }}</div>
            <div class="text-sm font-medium text-gray-400">{{ user.email }} </div>
        </div>
        <div class=" flex-row ml-auto p-2">
            <button @click="acceptRequest" class=" items-center rounded-full bg-primary h-10 w-10 mr-2">
                <font-awesome-icon icon="fa-solid fa-check" />
            </button>
            <button  @click="declineRequest" class=" items-center rounded-full bg-primary h-10 w-10">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
        </div>

    </div>
</template>

<script>
import {acceptRequest, declineRequest} from '../services/friendService.js'

export default {
    name: 'Notification',
    props: {
        user: {
            type: Object,
            required: true,
            default: () => {
                return {
                    image: 'https://freesvg.org/img/abstract-user-flat-4.png',
                    name: 'Username',
                    email: 'email',
                }
            }
        },
    },
    methods: {
        acceptRequest(){
            acceptRequest(this.user.id);
        },
        declineRequest(){
            declineRequest(this.user.id);
        }
    }
}
</script>