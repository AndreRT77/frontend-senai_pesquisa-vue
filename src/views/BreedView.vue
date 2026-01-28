<script setup lang="ts">
  import { getDogsByBreed } from '@/services/dogService';
  import { ref } from 'vue';
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const dogs = ref([])

  async function getDogs() {
    const nome = route.query.breed as string

    if (!nome) return

    dogs.value = await getDogsByBreed(nome)
  }

  getDogs()
</script>

<template>
  <header>
    <router-link :to="{ path: '/' }">
      <button>Voltar</button>
    </router-link>
    <h1>Raça</h1>
    <div></div>
  </header>
  <main>
    <img
      v-for="(img, index) in dogs"
      :key="index"
      :src="img"
    />
    <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" alt="">
  </main>
</template>

<style>
  header {
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  button {
    font-size: 1.5rem;
    height: 64px;
    border-radius: 50px;
    padding: 0 16px;
    cursor: pointer;
  }
</style>