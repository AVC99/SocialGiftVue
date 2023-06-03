<template>
    <section class="bg-background">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2 " src="src\assets\appLogo.svg" alt="logo">
                Social Gift
            </a>
            <div class="w-full bg-secondary rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Log in
                    </h1>
                    <form @submit.prevent="login" class="space-y-4 md:space-y-6">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-white ">
                                Your email</label>
                            <input type="email" name="email" id="email" v-model="email"
                                class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                                placeholder="name@email.com" required>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-white ">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" v-model="password"
                                class="bg-tertiary placeholder-gray-400 text-white sm:text-sm rounded-xl block w-full p-2.5"
                                required>
                        </div>
                        <button @click="login" type="submit"
                            class="w-full text-black font-bold bg-primary hover:bg-primary focus:ring-black-4 focus:outline-none focus:ring-black rounded-full text-sm px-5 py-2.5 text-center ">Sign
                            in</button>
                        <p class="text-sm flex justify-center font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <router-link to="/signup" class="font-medium text-primary hover:underline dark:text-primary">
                                Sign up</router-link>
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
            email: '',
            password: '',
            error: ''
        };
    },
    methods: {
       

       login() {
            const userInfo = JSON.stringify({
                email: this.email,
                password: this.password

            });

            let config = {
                method: 'post',
                maxBodyLength: Infinity,
                url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userInfo
            };

            axios.request(config)
                .then((response) => {
                    //get the acces token to prepare the second request to get the user id
                    let configId = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: 'https://balandrau.salle.url.edu/i3/socialgift/api/v1/users/search?s=' + this.email,
                        headers: {
                            'Authorization': 'Bearer ' + response.data.accessToken,
                        }
                    };
                    axios.request(configId)
                        .then((response2) => {
                            // looking for the user id with the email and the acces token
                            for (const d of response2.data) {
                                console.log(d.email); 

                                if (d.email === this.email) {
                                    localStorage.setItem('userId', d.id);
                                    localStorage.setItem('accessToken', response.data.accessToken);
                                    console.log("logging in");
                                    this.$router.push('/');
                                }
                            }

                        })
                        .catch((error) => {
                            this.error = error.response.data.message;
                        });

                })
                .catch((error) => {
                    this.error = error.response.data.message;
                });
        },
    }
};
</script>