<script setup>

</script>

<template>
  <nav class="minor top">
    <a href="#">Campus directory</a>

    <a href="#">Department calendar</a>

    <router-link :to="{ name: 'contact' }">Contact Us</router-link>

    <a href="#">
      <img src="@/assets/files/u_small.gif" alt="U of U Logo"/>
    </a>
  </nav>
</template>

<style scoped>
@import '@/assets/top-bottom-navs.css';
</style>