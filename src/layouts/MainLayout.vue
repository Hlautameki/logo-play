<template>
  <DndProvider :backend="HTML5Backend">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            <q-btn
              flat
              label="Logo Play"
              to="/"
            />
          </q-toolbar-title>

          <div>Quasar v{{ $q.version }}</div>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </DndProvider>
</template>

<script>
import { defineComponent } from 'vue'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
export default defineComponent({
  name: 'MainLayout',

  components: { DndProvider },

  setup() {
    return { HTML5Backend }
  },
})
</script>
