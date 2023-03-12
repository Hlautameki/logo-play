import { useSyllablesBuilder } from '../reusable/syllablesBuilder'
export function useSyllablesWithPathBuilder() {
  const { getSyllables } = useSyllablesBuilder()

  function getSyllablesWithPath(consonant) {
    const syllablesWithPath = []
    const syllables = getSyllables(consonant)

    syllables.forEach((syllable) => {
      syllablesWithPath.push({
        syllable: syllable,
        path: `assets/lori/${consonant}/${syllable}`,
      })
    })

    return syllablesWithPath
  }

  return { getSyllablesWithPath }
}
