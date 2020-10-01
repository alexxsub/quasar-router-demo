
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/person',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      components: {
        default: () => import('pages/Person.vue'),
        right: () => import('components/edit/editPerson.vue')
      }
    }]
  },
  {
    path: '/email',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: '',
      components: {
        default: () => import('pages/Email.vue'),
        right: () => import('components/edit/editEmail.vue')
      }
    }]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
