<template>
    <section class="bg-background">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white ">
                <img class="w-8 h-8 mr-2 " src="src\assets\appLogo.svg" alt="logo">
                Social Gift
            </a>
            <div
                class="w-full bg-secondary rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
                        Sign up
                    </h1>
                    <form @submit.prevent="signUp" class="space-y-4 md:space-y-6" >
                       <!--Name Input-->
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-white ">Name</label>
                            <input type="name" name="name" id="name" v-model="name"
                                class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5" 
                                placeholder="Name" required>
                        </div>
                          <!--Last Name Input-->
                          <div>
                            <label for="Last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="Last_name" name="Last_name" id="Last_name" v-model="Last_name"
                                class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                                placeholder="Last name" required>
                        </div>
                          <!--Email Input-->
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Your
                                email</label>
                            <input type="email" name="email" id="email" v-model="email"
                                class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                                placeholder="name@email.com" required>
                        </div>
                         <!--Password Input-->
                        <div>
                            <label for="password"
                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" v-model="password"
                                class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                                required>
                        </div>
                         <!--Submit Button-->
                        <button @click="signUp" type="submit"
                            class="w-full text-black font-bold bg-primary hover:bg-primary focus:ring-black-4 focus:outline-none focus:ring-black rounded-full text-sm px-5 py-2.5 text-center ">
                            Sign up
                        </button>
                        <!--Log in text-->
                        <p class="text-sm flex justify-center font-light text-gray-500 dark:text-gray-400">
                            Already have an account?
                            <router-link to="/login" class="font-medium text-primary hover:underline dark:text-primary"> Log in</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            last_name: '',
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
        signUp() {
            const userInfo = JSON.stringify({
                name: this.name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                image: 'https://balandrau.salle.url.edu/i3/repositoryimages/photo/47601a8b-dc7f-41a2-a53b-19d2e8f54cd0.png'

            });
            console.log(userInfo);
        
            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userInfo
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response));
                    //reddirect to login
                    this.$router.push({ name: '/login' });
                })
                .catch((error) => {
                    this.error = error.response.data.message;
                });
        },
    }
};
</script>
