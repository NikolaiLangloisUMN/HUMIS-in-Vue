<script setup>

import InnerLayout from "@/views/layouts/InnerLayout.vue";
</script>

<template>
  <inner-layout>
    <nav class="inner-nav">
      <a href="#">Contact information</a>
      |
      <a href="#">Faculty directory</a>
      |
      <a href="#">Staff directory</a>
    </nav>

    <section class="content">
      <h3>Contact us</h3>

      <div>
        <h6>U.S. MAIL</h6>
        <p>
          University of Utah<br/>
          Department of History<br/>
          380 S 1400 E RM 211<br/>
          Salt Lake City, UT 84112-0311
        </p>
      </div>

      <div>
        <h6>CAMPUS MAIL</h6>
        <p>
          Department of History
          211 C HALL
        </p>
      </div>

      <div>
        <h6>PHONE</h6>
        <p>
          (801) 581-6121
        </p>
      </div>

      <div>
        <h6>FAX</h6>
        <p>(801) 585-0580</p>
      </div>

      <div>
        <h6>HOURS</h6>
        <p>
          Monday - Friday
          8:00 AM - 5:00 PM
        </p>
      </div>
    </section>
  </inner-layout>
</template>

<style scoped>
nav.inner-nav {
  display: flex;
  gap: 5px;
  font-size: 11px;
  color: var(--burgundy);
  border-bottom: 2px solid var(--dark);
  padding-bottom: 15px;
  margin-bottom: 15px;

  a {
    color: var(--burgundy);
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

section.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    margin: 0;
  }

  div {
    h6 {
      color: var(--black);
    }

    p {
      margin: 0;
    }
  }
}
</style>
