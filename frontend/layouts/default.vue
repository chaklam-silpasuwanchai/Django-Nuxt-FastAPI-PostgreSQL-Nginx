<template>
  <v-app>
    <DefaultDrawer />
    <DefaultBar />
    <DefaultView />
  </v-app>
</template>

<script lang="ts" setup>
  import DefaultDrawer from './default/Drawer.vue'
  import DefaultBar from './default/AppBar.vue'
  import DefaultView from './default/View.vue'
</script>