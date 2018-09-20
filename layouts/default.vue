<template>
  <v-app light class="app">
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Duuun / Daisuke Murakami</span>
    </v-footer>
  </v-app>
</template>

<style>
body {
  font-family: "ＭＳ Ｐゴシック", Osaka, "ヒラギノ角ゴ Pro W3", sans-serif !important;
}

@media (min-width: 960px) {
  .v-card {
    min-height: 500px;
  }
}
.container {
  padding: 13px;
}
.v-card {
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-toolbar__content {
  background: #f4c23a;
  color: #191a1c;
}
.v-toolbar__title {
  font-weight: bold;
  font-size: 1.7rem;
}
.v-btn__content {
  color: #191a1c;
}
.v-card {
  border-radius: 10px;
}
.v-card__title {
  border-bottom: 1px solid lightgray;
  color: gray;
}
.headline {
  font-size: 16px !important;
  line-height: 13px !important;
}
</style>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: 'home', title: 'ホーム', to: '/' },
        {
          icon: 'people',
          title: '出演者一覧',
          to: '/idols'
        },
        {
          icon: 'list_alt',
          title: 'セットリスト予想',
          to: '/setlist'
        },
        {
          icon: 'filter_vintage',
          title: 'フラワースタンド',
          to: '/flower'
        },
        { icon: 'help', title: 'このサイトについて', to: '/about' },
        { icon: 'new_releases', title: '更新履歴', to: '/release' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Produce the Cinderella Girls!!!!!!'
    }
  }
}
</script>
