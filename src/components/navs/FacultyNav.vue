<script setup>
import newFacultyData from "@/views/faculty-and-staff/new-faculty.js";
</script>

<template>
  <section class="faculty-nav">
    <a href="#">New faculty</a>

    <div class="sub">
      <a v-for="faculty in newFacultyData" href="#" v-text="faculty.firstName + ' ' + faculty.lastName"/>
    </div>

    <a href="#">Faculty listing</a>
    <a href="#">Staff listing</a>
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
  }

  div.sub {
    margin-left: 1rem;

    a {
      color: red;
    }
  }
}
</style>