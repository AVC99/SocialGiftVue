<template>
    <div class="flex flex-row  justify-between items-center h-auto space-x-3 bg-tertiary rounded-2xl p-2">
        <div class=" px-1 py-1">
            <img class="h-12 w-12 rounded-full" :src="user_image" alt="Profile picutre">
        </div>
        <div class="ml-3">
            <div class="text-sm font-medium text-white"> {{ username }}</div>
            <div class="text-sm font-medium text-gray-400">{{ email }} </div>
        </div>
        <div class=" flex-row ml-auto p-2">
            <button class="  items-center rounded-full bg-primary h-10 w-10 mr-2">
                <font-awesome-icon icon="fa-solid fa-check" />
            </button>
            <button class=" items-center rounded-full bg-primary h-10 w-10">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'Notification',
    props: {
        user_image: {
            type: String,
            default: 'https://freesvg.org/img/abstract-user-flat-4.png'
        },
        username: {
            type: String,
            required: true,
            default: 'Username'
        },
        email: {
            type: String,
            required: true,
            default: 'email'

        },
    },
}
</script>