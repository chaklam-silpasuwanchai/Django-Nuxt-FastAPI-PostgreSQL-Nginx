<template>
  <v-app-bar  color="primary" flat>
    <v-container class="mx-auto d-flex align-center justify-center">

      <v-btn icon="mdi-home" href="/"></v-btn>
      <v-btn icon="mdi-flash" href="/another"></v-btn>
      <Droupdown id='heart-menu' icon="mdi-heart" :menu="heartMenu"></Droupdown>


      <v-spacer></v-spacer>
      <Droupdown id='lang-menu' icon="mdi-web" :menu="languageMenu"></Droupdown>
      <v-btn class="text-none" stacked>
        <v-badge content="2" color="error">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>

      <UserButton username="chaky"></UserButton>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
import { useCookie } from 'nuxt/app'
import { onMounted } from 'vue';
import { useDrawerStore } from '@/stores/drawer'

const heartMenu = [
  {'href':'/', 'name':'Menu1'},
  {'href':'/', 'name':'Menu2'},
  {'href':'/', 'name':'Menu3'},
  'divider',
  {'href':'/', 'name':'Menu4'},
]

const languageMenu = [
  {'href':'/', 'name':'🇹🇭 Thai'},
  {'href':'/', 'name':'🇺🇸 English'},
]

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