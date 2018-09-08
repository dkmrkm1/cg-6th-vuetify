<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title class="headline">更新履歴</v-card-title>
          <!-- <v-card-text class="" v-for="item in list" v-bind:key="item.id">
            <p>{{ item.date }}</p>
            <p>{{ item.subject }}</p>
          </v-card-text> -->
          <v-list two-line subheader>
            <v-list-title v-for="item in list" :key="item.id">
              <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-title>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      list: [{ id: 1, title: '公開', subtitle: '2018-09-10' }]
    }
  }
}
</script>
