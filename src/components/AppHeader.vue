<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container flex items-center justify-start px-4 py-5 mx-auto">
      <!-- App Name -->
      <router-link
        class="mr-4 text-2xl font-bold text-white uppercase"
        exact-active-class="no-active"
        :to="{ name: 'home' }"
        >Music</router-link
      >

      <div class="flex items-center flex-grow">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li v-if="!userStore.userLoggedIn">
            <router-link
              class="px-2 text-white"
              to="#"
              @click.prevent="toggleAuthModal"
              >Login / Register</router-link
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }"
                >Manage</router-link
              >
            </li>
            <li>
              <router-link
                class="px-2 text-white"
                to="#"
                @click.prevent="signOut"
                exact-active-class="no-active"
                >Logout</router-link
              >
            </li>
          </template>
        </ul>
        <ul class="ml-auto">
          <li>
            <a @click.prevent="changeLocale" class="px-2 text-white" href="#">
              {{ currentLocale }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal";
import useUserStore from "@/stores/user";

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore, useUserStore),
    currentLocale() {
      return this.$i18n.locale === "fr" ? "French" : "English";
    },
  },
  methods: {
    toggleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },
    signOut() {
      this.userStore.signOut();
      console.log(this.$router);
      if (this.$route.meta.requiresAuth) {
        this.$router.push({ name: "home" });
      }
    },
    changeLocale() {
      this.$i18n.locale = this.$i18n.locale === "fr" ? "en" : "fr";
    },
  },
};
</script>
