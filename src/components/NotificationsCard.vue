<template>
    <div class="w-4/5 h-1/2 bg-tertiary border border-gray-700 mt-4 rounded-xl  pt-2">
        <span class="text-white text-xl p-2 ">
            <font-awesome-icon icon="fa-solid fa-bell" class="mr-4 h-6 w-6" />
            Notifications </span>

        <div
            class="w-full bg-secondary space-y-2 h-4/5  rounded-xl p-2 mt-4 overflow-y-auto no-scrollbar border border-gray-800">
            <Notification v-for="(request, index) in requestList" :key="index" :user="request"></Notification>
        </div>

    </div>
</template>

<script>
import Notification from '../components/Notification.vue';



export default {
    name: 'NotificationsCard',
    components: {
        Notification
    },
    props: {
        requestList: {
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
}
</script>
