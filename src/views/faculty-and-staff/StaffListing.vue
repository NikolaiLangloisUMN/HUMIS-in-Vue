<script setup>
import dataAllStaff from "@/views/faculty-and-staff/data-all-staff.js";
import PersonCard from "@/views/faculty-and-staff/PersonCard.vue";
</script>

<template>
  <h5>Staff Listing</h5>

  <person-card v-for="person in dataAllStaff" :data="person"/>
</template>

<style scoped>

</style>