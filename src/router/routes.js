const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'playsound/:consonant',
        component: () => import('pages/PlaySound.vue'),
      },
      { path: 'indicate', component: () => import('pages/IndicatePage.vue') },
      {
        path: 'syllableSelection',
        component: () => import('pages/SyllableSelectionPage.vue'),
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
