<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value.name
</script>

<template>
  <nav class="left-nav">
    <router-link v-for="(route, index) in router.options.routes.filter(route => route.meta.showInNav)"
                 :key="index"
                 :to="{ name: route.name }"
                 v-text="route.meta.title"
                 :class="{ 'active' : currentRoute === route.name }">
    </router-link>
  </nav>
</template>

<style scoped>
nav.left-nav {
  margin: 20px 20px 0;

  a {
    display: block;
    text-transform: uppercase;
    font-size: 10px;
    color: var(--black);
    border-bottom: 2px solid var(--engDeptGreen);
    text-decoration: none;
    padding: 10px 0 10px 10px;

    &:hover {
      background-color: var(--engDeptGreen);
      color: #fff;
    }

    &.active {
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>