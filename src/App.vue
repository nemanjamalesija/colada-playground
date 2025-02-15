<script setup lang="ts">
import { useQuery } from '@pinia/colada'
import { watch } from 'vue';

async function fetchJokes() {
  const response = await fetch("https://icanhazdadjoke.com/search?limit=5", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  return data.results;
}


const {
  state, asyncStatus, data
} = useQuery({
  key: ['products-list'],
  query: fetchJokes,
})


watch(state, (newState , oldState) => {

  console.log("oldState", oldState);
  console.log("newstate", newState);

})

</script>
<template>
  <h1>Basic</h1>
  <h1 v-if="asyncStatus === 'loading'"> Loading....</h1>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
