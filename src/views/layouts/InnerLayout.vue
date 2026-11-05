<script setup>

import LeftNav from "@/components/navs/LeftNav.vue";
import TopNav from "@/components/navs/TopNav.vue";
import BottomNav from "@/components/navs/BottomNav.vue";
import DropDownMenuNav from "@/components/navs/DropDownMenuNav.vue";
</script>

<template>
  <section class="container">

    <header>
      <a href="index.html">
        <router-link :to="{ name: 'home' }">
          <img src="@/assets/files/historyHeader.gif" alt="HUMIS project"/>
        </router-link>
      </a>

      <img src="@/assets/files/histBooks01.jpg" alt="Books on a table"/>
    </header>

    <section class="middle">
      <div class="left-side">
        <left-nav/>

        <div class="login-links">
          <img src="@/assets/files/login-cis.gif" alt="Log into CIS"/>
          <img src="@/assets/files/login-humis.gif" alt="Log into HUMIS"/>
        </div>
      </div>

      <section class="inner">

        <drop-down-menu-nav/>

        <top-nav/>

        <main>
          <slot/>
        </main>

        <bottom-nav/>

      </section>
    </section>

    <footer>
      380 SOUTH 1400 EAST | 211 C HALL | SALT LAKE CIT Y | UT | 84112 | PHONE 801.581.6121 | FAX 801.585.0580
    </footer>

  </section>
</template>

<style scoped>
section.container {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 780px;

  header {
    img {
      width: 100%;
      display: block;
    }
  }

  section.middle {
    /*height: 100%;*/
    display: flex;
    flex-direction: column;

    div.left-side {
      display: none;
    }

    section.inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      /*height: 100%;*/

      main {
        padding: 30px;
      }
    }
  }

  footer {
    color: white;
    background-color: var(--engDeptGreen);
    text-align: center;
    padding: 10px;
    font-size: 10px;
  }


  /* Tablet and up overrides */
  @media screen and (width >= 600px) {
    section.middle {
      flex-direction: row;

      div.left-side {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30%;
        background-color: var(--grey-light);
        border-right: 2px solid var(--green-light);
        padding-bottom: 20px;

        div.login-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
      }

      section.inner {
        width: 70%;

        nav.drop-down-menu {
          //display: none;
        }

        main {
          min-height: 500px;
        }
      }
    }
  }
}
</style>