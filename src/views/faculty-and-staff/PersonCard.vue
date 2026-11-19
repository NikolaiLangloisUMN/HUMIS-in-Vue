<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
})
</script>

<template>
  <p class="person-card">
    <span class="name" v-text="`${data.first_name} ${data.last_name}`"/>
    <span class="title" v-text="data.job_title"/>
    <span class="office">Office: {{ data.office }}</span>
    <span class="phone">Phone: {{ data.phone_number }}</span>
    <span class="email">
      Email: <a :href="`mailto:${data.email}`">{{ data.email }}</a>
    </span>
  </p>
</template>

<style scoped>
p.person-card {
  font-size: 0.8rem;

  span {
    display: block;

    &.name {
      font-weight: bold;
      font-size: 110%;
    }

    a {
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>