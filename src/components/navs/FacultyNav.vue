<script setup>
import newFacultyData from "@/views/faculty-and-staff/new-faculty.js";
</script>

<template>
  <section class="faculty-nav">
    <router-link :to="{ name: 'new-faculty'}">New faculty</router-link>

    <div class="sub">
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