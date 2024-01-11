<template>
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false" floating>
    <v-list-item title="ESG Redddporting" prepend-icon="mdi-emoticon-cool-outline" nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>
    <v-list nav density="compact">
      <v-list-subheader :class="{'d-none':rail}">
        MENU 1
      </v-list-subheader>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>

    <v-list nav density="compact">
      <v-list-subheader :class="{'d-none':rail}">
        MENU 2
      </v-list-subheader>
      <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    }
  },
}
</script>