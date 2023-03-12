export function useSyllablesBuilder() {
  const vowels = ['a', 'o', 'u', 'e', 'i', 'y']

  function getSyllables(consonant) {
    const syllables = []

    vowels.forEach((vowel) => {
      const syllable = `${consonant}${vowel}`
      syllables.push(syllable)
    })

    return syllables
  }

  return { getSyllables }
}
