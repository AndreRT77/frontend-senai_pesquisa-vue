<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const breed = ref('')

function search() {
  if (breed.value.trim()) {
    router.push({ name: 'breed', params: { breed: breed.value } })
  }
}
</script>

<template>
  <main>
    <div>
      <input placeholder="Digite uma raça" v-model="breed" @keyup.enter="search" />
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
      </button>
    </div>
  </main>
</template>

<style scoped>
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
</style>
