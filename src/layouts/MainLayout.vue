<template>
  <DndProvider :backend="backend">
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

<script setup>
import { TouchBackend } from 'react-dnd-touch-backend'
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const backend = $q.platform.is.mobile ? TouchBackend : HTML5Backend
</script>
