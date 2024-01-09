<template>
  <v-card class="mx-auto" prepend-icon="mdi-table" title="Table">
    <v-card-title>
      <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Search" single-line flat
        hide-details variant="solo-filled"></v-text-field>

    </v-card-title>
    <v-card-text>
      <v-data-table 
        v-if="pending" 
        :loading="pending"
        loading-text="Loading... Please wait"></v-data-table>
      <v-data-table v-else  v-model="selected" :items="data" item-value="name" show-select
        v-model:search="search">

      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const { pending, data } = await useFetch('/api/report', {
  lazy: true,
  server: false,
})


// const {data} = await useLazyAsyncData('directories', () => $fetch('/api/hello'), { server: false });
// console.log(data)
const selected = ref([])
const search = ref("")

const headers = ref([{
  align: 'start',
  sortable: false,
},
{ key: 'name', title: 'The Name' },
{ key: 'calories', title: 'The Calories' },
])


</script>