<template>
  <v-app-bar :elevation="2" color="primary" density="compact">
    <v-container class="mx-auto d-flex align-center justify-center">
      <!-- <v-app-bar-title> -->
      <v-btn icon="mdi-home" href="/"></v-btn>
      <v-btn icon="mdi-flash" href="/another"></v-btn>
      <v-btn class="text-none" append-icon="mdi-menu-down"><v-icon icon="mdi-heart"></v-icon></v-btn>
      <!-- </v-app-bar-title> -->

      <v-spacer></v-spacer>

      <v-btn class="text-none" append-icon="mdi-menu-down"><v-icon icon="mdi-web"></v-icon></v-btn>
      <v-btn class="text-none" stacked>
        <v-badge content="2" color="error">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-btn id="menu-activator" append-icon="mdi-menu-down">
        <v-avatar image="https://randomuser.me/api/portraits/women/75.jpg"></v-avatar>
        Chaky
      </v-btn>
      <v-menu activator="#menu-activator" :close-on-content-click="false">
        <v-card>
          <v-list>
            <v-list-subheader>Setting</v-list-subheader>
            <v-list-item>
              <v-switch @click="toggleTheme" false-icon="mdi-white-balance-sunny" true-icon="mdi-weather-night"
                false-value="light" true-value="dark" label="Switch Theme" v-model="isDark"></v-switch>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { useCookie } from 'nuxt/app'
import { onMounted } from 'vue';
import { useDrawerStore } from '@/stores/drawer'
const store = useDrawerStore();

const theme = useTheme();
const cookie = useCookie<string>('theme');
var isDark = cookie.value
const setTheme = () => {
  theme.global.name.value = cookie.value
  isDark = cookie.value
}

const toggleTheme = () => {
  const selected_theme = cookie.value != 'light' ? 'light' : 'dark'
  cookie.value = selected_theme
  setTheme()
}


onMounted(() => {

  setTheme()

})
</script>