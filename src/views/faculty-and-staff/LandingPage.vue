<script setup>

import InnerLayout from "@/views/layouts/InnerLayout.vue";
import TwoColumnLayout from "@/views/layouts/TwoColumnLayout.vue";
import FacultyNav from "@/components/navs/FacultyNav.vue";
import FacultyHeads from "@/views/faculty-and-staff/FacultyHeads.vue";
</script>

<template>
  <inner-layout>

    <two-column-layout>
      <template #left-top>
        <h4>Faculty &amp; staff</h4>

        <faculty-nav/>
      </template>

      <template #left-bottom>
        <faculty-heads/>
      </template>

      <template #right-side>
        <router-view/>
      </template>
    </two-column-layout>

  </inner-layout>
</template>

<style scoped>

</style>