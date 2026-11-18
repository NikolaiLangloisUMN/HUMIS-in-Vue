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

    &.left-side {
      width: 35%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &.right-side {
      border-left: 1px dotted black;
      padding-left: 1rem;

      p {
        font-size: 0.7rem;
      }
    }
  }
}
</style>