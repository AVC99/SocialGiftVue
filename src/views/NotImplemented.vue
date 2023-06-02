<template>
    <div class="flex flex-col items-center justify-center h-screen bg-background">
      <div class="text-3xl font-bold mb-4 text-white">501 Page Not Implemented Yet</div>
      <div class="text-lg text-gray-600 mb-8">Sorry, this page is under construction.</div>
      <img class="w-1/4 mb-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/UnderCon_icon.svg/800px-UnderCon_icon.svg.png" alt="Under Construction" />
      <button @click="goHome" class="px-4 py-2 rounded-full bg-primary text-black">Go Back</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotImplementedYet',
    methods: {
      goHome() {
        this.$router.push('/');
      }
    },
    // Component logic goes here
  }
  </script>
  
 