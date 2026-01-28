<script setup>
  import { ref } from "vue";

  const breed = ref('')
</script>

<template>
  <main>
    <div>
      <input placeholder="Digite uma raça" v-model="breed"/>
      <router-link :to="{ path: '/breed', query: { breed: breed } }">
        <button>Pesquisar</button>
      </router-link>
    </div>
  </main>
</template>

<style>
  main {
    height: 100dvh;
    display: grid;
    place-items: center;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  input {
    font-size: 2rem;
    border-radius: 50px;
    padding: 12px 24px;
    width: 600px;
  }

  button {
    font-size: 1.5rem;
    height: 64px;
    border-radius: 50px;
    padding: 0 16px;
    cursor: pointer;
  }
</style>