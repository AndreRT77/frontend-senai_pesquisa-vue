<script setup>
import { getDogsByBreed } from '@/services/dogService'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const dogs = ref([])
const breed = ref('')
const notFoundError = ref(false)

async function getDogs() {
  breed.value = route.params.breed

  const response = await getDogsByBreed(breed.value)

  if (response.code == 404) {
    notFoundError.value = true
  }

  dogs.value = response.message
}

getDogs()
</script>

<template>
  <header>
    <router-link :to="{ path: '/' }">
      <button>Voltar</button>
    </router-link>
    <h1>Raça: {{ breed }}</h1>
    <div></div>
  </header>
  <div v-if="notFoundError" class="error-container">
    <div class="error-card">
      <p>Não foi encontrado cachorros da raça pesquisada.</p>
    </div>
  </div>
  <main v-else class="images">
    <img v-for="(image, index) in dogs" :key="index" :src="image" />
  </main>
</template>

<style scoped>
header {
  padding: 48px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 150px;
}

header > * {
  justify-self: center;
  align-self: center;
}

button {
  font-size: 1.5rem;
  height: 48px;
  padding: 0 16px;
  cursor: pointer;
}

.images {
  margin: 0 20% 80px 20%;
  display: columns;
  columns: 4;
}

.error-container {
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-card {
  display: grid;
  place-items: center;
  background-color: rgb(224, 62, 33);
  color: white;
  font-size: 2rem;
  height: 200px;
  width: 800px;
  border-radius: 16px;
}

img {
  width: 100%;
}
</style>
