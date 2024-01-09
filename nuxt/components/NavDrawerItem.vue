
<template>
  <template v-if="root">
    <v-list>
      <NavDrawerItem v-for="item in link.children" :link="item" />
    </v-list>
  </template>
  <template v-else-if="link.children">
    <v-list-group :value="link.title">
      <template v-slot:activator="{ props }">
        <v-list-item v-bind="props" :title="link.title"></v-list-item>
      </template>
      <NavDrawerItem v-for="item in link.children" :link="item" />
    </v-list-group>
  </template>
  <template v-else>
    <v-list-item :title="link.title" :to="link._path"></v-list-item>
  </template>
</template>

<script lang="ts" setup>
const props = defineProps([
  'link', 'root'
])
//
</script>