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
<h1>home pa</h1>
<h1 v-if="asyncStatus === 'loading'">Loading...</h1>
   <RouterLink to="/">Go home</RouterLink>
</template>
