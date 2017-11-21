<template>
  <v-app>
    <v-navigation-drawer temporary absolute  v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up"
      ></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Psycho Snyd</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          v-for="item in menuItems"
          :key="item.title"
          class="hidden-xs-only"
          router
          :to="item.link"
          exact
        >
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
    <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        menuItems: [
          { icon : 'list', title: 'view rules', link: '/rules'},
          { icon : 'create', title: 'create rules', link: '/rules/new'},
          { icon : 'lock_open', title: 'log in', link: '/signin'},
          { icon : 'perm_identity', title: 'sign up', link: '/signup'},
          { icon : 'account_box', title: 'user', link: '/profile'},
          { icon : 'help_outline', title: 'Faq', link: '/faq'}
        ]
      }
    }
  }

</script>
