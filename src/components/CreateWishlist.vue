<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center bg-secondary z-50 w-1/2 h-3/4 rounded-2xl m-auto ">
        <button @click="close" class="absolute top-2 right-2 items-center rounded-full bg-primary h-10 w-10">
            <font-awesome-icon icon="fa-solid fa-xmark" />
        </button>

        <div class="flex flex-col w-3/4 p-4 space-y-5">
            <!--Name Input-->
            <div>
                <label for="name" class="block mb-2 text-sm font-medium text-white ">Wishlist Name</label>
                <input type="name" name="name" id="name" v-model="wishlistName"
                    class="bg-tertiary placeholder-gray-400 text-white  rounded-xl block w-full p-2"
                    placeholder="Wishlist Name" required>
            </div>
            <!--Description Input-->
            <div>
                <label for="description"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                <input type="description" name="description" id="description" v-model="description"
                    class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5 h-20"
                    placeholder="Description..." required>
            </div>
            <!--End Date Input-->
            <div >
                <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End
                    Date</label>
                <div class="flex flex-row">
                    <input type="date" name="end_date"  :min="today" id="end_date" v-model="end_date"
                        class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                        placeholder="dd / mm / yyyy" required>
                </div>

            </div>
        </div>
        <!--Submit Button-->
        <button @click="createWishlist" type="submit"
            class="w-1/2 text-black font-bold bg-primary  rounded-full text-sm px-5 py-2.5 text-center ">
            Create Wishlist
        </button>
    </div>
</template>

<script>
import { createWishlist } from '../services/wishListServices';
export default {
    name: 'CreateWishlist',
    data() {
        return {
            wishlistName: '',
            description: '',
            end_date: '',
            today: new Date().toISOString().split('T')[0],
        }
    },
    methods: {
        async createWishlist() {
            try {
                await createWishlist(this.wishlistName, this.description, this.end_date).then(() => {
                    location.reload();
                    alert("Wishlist created");
                });
            } catch (error) {
                this.error = error.response.data.message;
                console.log(this.error);
            }
        },
        close() {
            this.$emit('close')
        }
    }
}

</script>