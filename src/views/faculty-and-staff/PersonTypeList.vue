<script setup>
import FacultyAndStaffCombined from "@/data/faculty-and-staff-combined.js";
import PersonCard from "@/views/faculty-and-staff/PersonCard.vue";
import {ref} from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  }
})

const name_filter = ref('')
</script>

<template>

  <label>
    Filter by name:
    <input name="name_filter" v-model="name_filter"/>
  </label>

  <person-card
      v-for="(person, key) in FacultyAndStaffCombined
      .filter(
          item => item.type === props.type &&
              (
                  item.first_name.toLowerCase().includes(name_filter) ||
                  item.last_name.toLowerCase().includes(name_filter)
              )
      )"
      :key="key"
      :data="person"
  />

</template>

<style scoped>
label {
  font-size: 0.8rem;
}
</style>