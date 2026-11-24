<script setup>
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import newFaculty from "@/data/data-new-faculty.js";

const route = useRoute()
const data = ref(null)

const loadFaculty = async (id) => {
  data.value = newFaculty.find(faculty => faculty.id === Number(id)) ?? null
}

console.log(data.value)

watch(
    () => route.params.facultyId,
    (id) => loadFaculty(id),
    {immediate: true}
)
</script>

<template>
  <h5 v-text="`New faculty: ${data.firstName} ${data.lastName}`"/>

  <aside class="pull right">
    <img :src="data.photo"/>
  </aside>

  <p v-html="data.description"/>
</template>

<style scoped>

</style>