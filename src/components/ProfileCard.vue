<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-2xl shadow ">
        <div class="flex flex-col items-center pb-10 pt-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
                :src="user_image"
                alt="User image" />
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{username}}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ email }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileCard',
    props: {
        user_image: {
            type: String,
            default: 'https://freesvg.org/img/abstract-user-flat-4.png'
        },
        username: {
            type: String,
            default: 'Username', 
            required: true
        },
        email: {
            type: String,
            default: 'email',
            required: true
        }
    }
   
}

</script>