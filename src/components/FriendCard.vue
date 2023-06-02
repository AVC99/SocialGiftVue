<template>
    <div class=" w-4/5 bg-tertiary border border-gray-700 rounded-xl shadow ">
        <div class="flex flex-col items-center pb-6 pt-6">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg"
                :src="user_image"
                alt="User image" />
            <h1 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{username}}</h1>
            <span class="text-sm text-gray-500 dark:text-gray-400">{{ email }}</span>
            <button class="rounded-full bg-primary text-black p-2 mt-2">
                <font-awesome-icon icon="fa-solid fa-user-minus" class=" h-4 w-4 " />
                Remove Friend
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FriendCard',
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
            default: 'email@email',
            required: true
        }
    }
   
}

</script>