const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'listen/:consonant',
        component: () => import('pages/PlaySound.vue'),
      },
      {
        path: 'indicate/:consonant',
        component: () => import('pages/IndicatePage.vue'),
      },
      {
        path: 'sequences/:consonant',
        component: () => import('pages/SequencesPage.vue'),
      },
      {
        path: ':mode',
        component: () => import('pages/SyllableSelectorPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
