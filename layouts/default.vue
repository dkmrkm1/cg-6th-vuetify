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
@media (min-width: 960px) {
  .v-card {
    min-height: 500px;
  }
}
.v-toolbar__content {
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
  color: #fff;
}
.v-toolbar__title {
  font-weight: bold;
  font-size: 1.7rem;
}
.v-btn__content {
  color: #fff;
}
.v-card {
  border-radius: 10px;
}
.v-card__title {
  background-image: linear-gradient(to right, #42a5f5 0%, #90caf9 100%);
  color: #fff;
  font-weight: bold;
}
</style>


<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        { icon: "home", title: "ホーム", to: "/" },
        {
          icon: "list_alt",
          title: "セットリスト予想",
          to: "/inspire"
        },
        {
          icon: "filter_vintage",
          title: "フラワースタンド",
          to: "/flower"
        },
        { icon: "info", title: "このサイトについて", to: "/about" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "CinderellaGirls 6thLive ファンサイト"
    };
  }
};
</script>
