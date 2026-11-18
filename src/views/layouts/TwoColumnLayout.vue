<script setup>

</script>

<template>
  <section class="two-column-layout">

    <section class="left-side">

      <div class="top">
        <slot name="left-top">
          left top
        </slot>
      </div>

      <div class="bottom">
        <slot name="left-bottom">
          left bottom
        </slot>
      </div>

    </section>

    <section class="right-side">
      <slot name="right-side">
        right side
      </slot>
    </section>

  </section>
</template>

<style scoped>
section.two-column-layout {
  display: flex;
  gap: 1rem;
  min-height: 500px;

  section {
    border: 1px solid black;
    display: flex;

    &.left-side {
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &.right-side {
      width: 65%;
    }
  }
}
</style>