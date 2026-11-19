<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true,
  }
})
</script>

<template>
<p class="faculty-contact-card">
  <span class="name" v-text="props.person.firstName + ' ' + props.person.lastName"/>
  <span class="title" v-text="props.person.title"/>
  <span class="address" v-text="props.person.address"/>
  <span class="address" v-text="props.person.address"/>
  <a class="phoneNumber" :href="`tel:${props.person.phoneNumber}`" v-text="props.person.phoneNumber"/>
  <a class="emailAddress" :href="`mailto:${props.person.emailAddress}`" v-text="props.person.emailAddress"/>
</p>
</template>

<style scoped>
p.faculty-contact-card {
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1px;

  span, a {
    display: block;

    &.name {
      font-weight: bold;
      font-size: 105%;
    }

    &.title {
      font-style: italic;
    }
  }

  a {
    color: black;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>