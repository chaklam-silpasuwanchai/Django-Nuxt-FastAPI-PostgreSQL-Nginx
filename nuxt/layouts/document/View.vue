<template>
  <v-main>
    <!-- <v-btn class="hidden-lg-and-up pull-btn" icon="mdi-menu" @click.stop="drawer = !drawer"></v-btn> -->
    <v-navigation-drawer mobile-breakpoint="lg" v-model="store.isOpen" floating>
      <!-- <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
      <v-divider></v-divider> -->

      <ContentNavigation v-slot="{ navigation }">
        <NavDrawerItem v-for="link of navigation" :link="link" root="true"/>
      </ContentNavigation>
    </v-navigation-drawer>


    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>

<script lang="ts" setup>
import { useDrawerStore } from '@/stores/drawer'
const store = useDrawerStore()

const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline'],
]
</script>

<style scoped>
.pull-btn {
  border-radius: 0px 50px 50px 0px !important;
  position: absolute;
  margin-top: 10px;
}
</style>