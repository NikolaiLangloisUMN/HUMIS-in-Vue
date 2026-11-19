<script setup>
import dataAllFaculty from "@/views/faculty-and-staff/data-all-faculty.js";
import PersonCard from "@/views/faculty-and-staff/PersonCard.vue";
</script>

<template>
  <h5>Faculty Listing</h5>

  <person-card v-for="person in dataAllFaculty" :data="person"/>
</template>

<style scoped>

</style>