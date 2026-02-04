<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const breed = ref('')

function search() {
  const breedName = breed.value.trim().toLowerCase()
  if (breedName) {
    router.push({ name: 'breed', params: { breed: breedName } })
  }
}
</script>

<template>
  <main>
    <div class="main-text">
      <img src="https://dog.ceo/img/dog-api-logo.svg" alt="">
      <h1>Dog API</h1>
    </div>
      
      <div>
        <div class=""><input placeholder="Digite uma raça" v-model="breed" @keyup.enter="search" />
        <button @click="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
        </button></div>
      
    </div>
    
  </main>
</template>

<style scoped>
main {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

h1{
  font-size: 4rem;
}

div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

input {
  font-size: 1.75rem;
  max-height: 64px;
  border-radius: 50px;
  padding: 12px 24px;
  width: 450px;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  height: 64px;
  width: 64px;
}

.main-text{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 20px;
}
</style>
