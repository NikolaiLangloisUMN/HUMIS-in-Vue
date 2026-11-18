<script setup>

import FacultyContactCard from "@/components/faculty-and-staff/FacultyContactCard.vue";

const ericH = { /* Javascript Object */
  firstName: 'Eric',
  lastName: 'Hinderaker',
  title: 'Department Chair',
  address: '308 Carlson Hall',
  phoneNumber: '581-5685',
  emailAddress: 'ehinderaker@history.utah.edu'
}

const aBiesinger = {
  firstName: 'Amanda',
  lastName: 'Biesinger',
  title: 'Undergraduate Advisor',
  address: '211 Carlson Hall',
  phoneNumber: '581-6420',
  emailAddress: 'amanda.biesinger@utah.edu',
}

const rHorn = {
  firstName: 'Rebecca',
  lastName: 'Horn',
  title: 'Associate Chair',
  address: '211 Carlson Hall',
  phoneNumber: '581-5294',
  emailAddress: 'rebecca.horn@history.utah.edu',
}

const lAdams = {
  firstName: 'Lindsay',
  lastName: 'Adams',
  title: 'Graduate Director',
  address: '211 Carlson Hall',
  phoneNumber: '581-8592',
  emailAddress: 'winthrop.adams@utah.edu',
}

const faculty = [ericH, aBiesinger, rHorn, lAdams]
</script>

<template>
  <faculty-contact-card v-for="person in faculty" :person="person"/>
</template>

<style scoped>

</style>