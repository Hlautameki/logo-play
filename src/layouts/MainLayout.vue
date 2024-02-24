<template>
  <DndProvider :backend="backend">
    <q-layout view="lHh Lpr lFf">
      <q-header
        elevated
        class="bg-pink-12"
      >
        <q-toolbar>
          <q-toolbar-title class="row justify-center">
            <q-btn
              flat
              to="/"
            >
              <q-img
                src="icons/syl.svg"
                width="200px"
              />
            </q-btn>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container
        style="background-image: url(backgrounds/cute-cartoon-unicorn.jpg)"
      >
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
