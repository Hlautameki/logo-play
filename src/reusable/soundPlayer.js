import { useSound } from '@vueuse/sound'
import { useQuasar } from 'quasar'

export function useSoundPlayer(path, callback) {
  const $q = useQuasar()
  let syllable

  try {
    syllable = useSound(require(`../${path}.mp3`), {
      onend: () => {
        if (callback) callback()
      },
    })
  } catch (e) {
    console.log(e)
  }

  function playSound() {
    if (syllable) {
      syllable.play()
    } else {
      $q.notify({
        message: `Couldn't found mp3 file: ${path}"`,
        color: 'negative',
      })
    }
  }

  return { playSound }
}
