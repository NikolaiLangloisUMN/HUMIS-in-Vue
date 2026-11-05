<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

const navigate = (event) => {
  router.push({name: event.target.value})
}

const isOnHomepage = () => {
  return router.currentRoute.value.name === 'home'
}
</script>

<template>
  <nav class="drop-down-menu">
    <label for="major-navigation">
      Navigate:

      <select name="major-navigation" id="major-navigation" @change="navigate($event)">
        <option v-if="isOnHomepage()">Choose...</option>
        <option v-for="(route, index) in router.options.routes.filter(route => route.meta.showInNav === true)"
                :value="route.name"
                :selected="route.name === router.currentRoute.value.name"
                :key="index">
          {{ route.meta.title }}
        </option>
      </select>
    </label>
  </nav>
</template>

<style scoped>
nav.drop-down-menu {
  background-color: var(--grey-light);
  padding: 10px;
  margin: 10px 10px 0;

  label {
    display: flex;
    gap: 20px;
    align-items: center;

    select {
      width: 100%;
    }
  }

  /* Tablet and up overrides */
  @media screen and (width >= 600px) {
    display: none;
  }
}
</style>