export async function getDogsByBreed(breed) {
   const normalizedBreed = breed.toLowerCase().trim()

  const response = await fetch(`https://dog.ceo/api/breed/${normalizedBreed}/images/random/6`)
  const data = await response.json()
  return data.message
}