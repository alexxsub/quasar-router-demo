<template>
  <q-layout view="lHh lpR lFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>

         SPA with 2 routing in same time
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
       <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <my-menu
          v-for="item in menuData"
          :key="item.title"
          :link="item.link"
          v-bind="item"
        />
      </q-list>
    </q-drawer>

    <q-drawer elevated show-if-above v-model="right" side="right" bordered>
      <router-view name="right" />

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import MyMenu from 'components/Menu.vue'
const menuData = [
  {
    title: 'Person',
    icon: 'person',
    link: '/person'
  },

  {
    title: 'Email',
    icon: 'email',
    link: '/email'
  },
  {
    title: '404',
    icon: 'warning',
    link: '/404'
  }
]
export default {
  components: { MyMenu },
  data () {
    return {
      left: false,
      right: false,
      menuData: menuData
    }
  }
}
</script>
