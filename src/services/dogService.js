export async function getDogsByBreed(breed) {
  const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
  const data = response.json()
  return data
}
