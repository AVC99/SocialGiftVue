<template>
    <div class="w-full min-w-96 rounded-xl overflow-hidden shadow-lg bg-tertiary border-2 border-gray-700 p-2">
        <img class="w-full rounded-xl" :src="product_image" alt="Product picture">
        <div class="px-6 py-4">
            <div class="font-bold text-white text-xl mb-1">{{ product_name }}</div>
            <div class="font-bold text-primary text-l mb-2">{{ price }}€</div>
            <p class="text-white text-base"> {{ product_description }}</p>
        </div>
        <button
            class="items-center bg-primary rounded-full px-3 py-1 w-full text-l font-semibold text-black">
            <font-awesome-icon icon="fa-solid fa-plus" class="mr-2 h-4 w-4" />
            Add to wishlist</button>

    </div>
</template>

<script>
export default {
    name: 'HomeProductCard',
    props: {
        product_image: {
            type: String,
            required: true,
            default: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896',
        },
        product_name: {
            type: String,
            required: true,
            default: 'Product Name',
        },
        price: {
            type: Number,
            required: true,
            default: '999',
        },
        product_description: {
            type: String,
            required: true,
            default: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus',
        }
    }
};

</script>