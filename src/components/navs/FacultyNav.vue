<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import newFacultyData from "@/views/faculty-and-staff/data-new-faculty.js";

const route = useRoute();

const isOnNewFacultyRoute = computed(() => {
  return route.name === 'new-faculty' || route.name === 'faculty-details';
})
</script>

<template>
  <section class="faculty-nav">
    <router-link :to="{ name: 'new-faculty'}">New faculty</router-link>

    <div v-if="isOnNewFacultyRoute" class="sub">
      <router-link v-for="faculty in newFacultyData"
                   :to="{ name: 'faculty-details', params: { facultyId: faculty.id }}"
                   :key="faculty.id"
                   v-text="faculty.firstName + ' ' + faculty.lastName"/>
    </div>

    <router-link :to="{ name: 'faculty-listing'}">Faculty listing</router-link>
    <router-link :to="{ name: 'staff-listing'}">Staff listing</router-link>
  </section>
</template>

<style scoped>
section.faculty-nav {
  font-size: 0.75rem;

  a {
    display: block;
    color: black;
    text-decoration: none;
    text-transform: capitalize;
    margin: 3px 0;

    &.router-link-exact-active {
      font-weight: bold;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  div.sub {
    margin-left: 1rem;

    a {
      color: var(--burgundy);

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>