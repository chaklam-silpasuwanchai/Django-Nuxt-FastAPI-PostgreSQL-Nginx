<template>
  <v-btn class="text-none" append-icon="mdi-menu-down" :id="id">
    <v-icon :icon="icon"></v-icon>
  </v-btn>

  <v-menu :activator="'#'+id" :close-on-content-click="false">
    <v-card>
      <v-layout>

        <v-card class="mx-auto">
          <v-list>
            <div v-for="item in menu" >
              <v-divider v-if="item == 'divider'"></v-divider>
              <v-list-item v-else :href="item.href">
                {{ item.name }}
              </v-list-item>
            </div>
          </v-list>
        </v-card>

      </v-layout>
    </v-card>
  </v-menu>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps([
  'id',
  'icon',
  'menu'
])
</script>