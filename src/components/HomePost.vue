<template>
    <div class="max-w-lg rounded-xl overflow-hidden shadow-lg bg-tertiary">
        <!--Cart title with profile picture and username-->
        <div>
            <div class="flex items-center">
                <div class="flex-shrink-0 px-1 py-1">
                    <img class="h-12 w-12 rounded-full"
                        :src="user_image"
                        alt="Profile picutre">
                </div>
                <div class="ml-3">
                    <div class="text-sm font-medium text-white"> {{ username }}</div>
                    <div class="text-sm font-medium text-gray-400">{{ email }} </div>
                </div>
            </div>
        </div>

        <img class="w-full rounded-xl"
            :src="product_image"
            alt="Product picture">
        <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-1">{{ product_name }}</div>
            <div class="font-bold text-primary text-l mb-2">{{ price }}€</div>
            <p class="text-white text-base"> {{ product_description }}</p>
        </div>
        <div class="flex justify-center px-6 pt-4 pb-2 space-x-2">
            <button
                class="flex items-center justify-center flex-shrink-0 bg-primary rounded-full px-3 py-1 text-sm font-semibold text-black w-1/2">Gift</button>
            <button
                class="flex items-center justify-center flex-shrink-0 bg-primary rounded-full px-3 py-1 text-sm font-semibold text-black w-1/2">Add
                to wishlist</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePost',
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
        product_image: {
            type: String,
            required: true
        },
        product_name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        product_description: {
            type: String,
            required: true
        }
    }
};

</script>