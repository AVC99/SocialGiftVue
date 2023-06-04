<template>
    <form class="w-4/5">
        <div class="relative">
            <input type="search" id="default-search"
                class="block w-full p-4 pl-5 text-sm text-white rounded-full bg-tertiary focus:bg-white-600 focus:ring-0"
                placeholder="Search..." required>
            <button type="search" 
                class="text-white absolute right-2.5 bottom-2 bg-primary font-bold rounded-full text-sm h-10 w-10 focus:text-white justify-self-center ">
                <font-awesome-icon icon="fa-solid fa-search" class="text-black" />
            </button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchBar',
}
</script>