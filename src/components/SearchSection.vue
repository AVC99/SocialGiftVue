<template>
    <div class="flex flex-col items-center ">
        <h1 class="flex flex-row w-full px-2 text-white items-center text-2xl self-center">
            <!--Back Button TODO: go back to the posts section-->
           <font-awesome-icon @click="" icon="fa-solid fa-arrow-left" class="mr-2 h-8 w-8 ml-1" />
         <span class="mx-auto">Search Results</span>
        </h1>
        <!--Tabs navigation -->
        <ul class="mb-5 w-full flex list-none flex-row flex-wrap mt-5">
            <li class="flex-auto text-center border-t-2 border-lightPrimary ">
                <a href="#" @click="changeTab('users')" class="inline-block  p-4 uppercase"
                    :class="{ 'border-transparent text-white': active_tab != 'users', 'border-t-4 border-primary text-primary': active_tab === 'users' }">Users</a>
            </li>
            <li class="flex-auto text-center   border-t-2 border-lightPrimary mr-2">
                <a href="#" @click="changeTab('products')" class="inline-block p-4  active uppercase"
                    :class="{ 'border-transparent text-white': active_tab != 'products', 'border-t-4 border-primary text-primary': active_tab === 'products' }">Products</a>
            </li>
        </ul>

        <!--Tabs-->
        <div v-if="active_tab === 'users'" class=" flex flex-col gap-2 items-center w-full mb-6  overflow-y-auto px-6 no-scrollbar">
           <UserCard></UserCard>
           <UserCard></UserCard>
           <UserCard></UserCard>
           <UserCard></UserCard>

        </div>
        <div v-if="active_tab === 'products'" class=" flex flex-col  gap-2 items-center justify-around  w-full  mb-10 overflow-y-auto px-6 no-scrollbar">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
    </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';
import ProductCard from '../components/ProductCard.vue';

export default {
    name: 'SearchSection',
    data() {
        return {
            active_tab: 'users',
        }
    },
    components: { UserCard,
        ProductCard },
    methods: {
        changeTab(tab) {
            this.active_tab = tab;
        },
    },
}

</script>