<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card class="release-card" style="min-height: 50px !important;" v-for="line in list" v-bind:key="line.id">
          <v-card-text>{{ line.title }}　　{{ line.subtitle }}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, title: '公開', subtitle: '2018-09-15' },
        { id: 2, title: 'ページ追加', subtitle: '2018-09-16' }
      ]
    }
  }
}
</script>

<style scoped>
.v-card__text span {
  color: lightgray;
  text-align: right;
}
.release-card {
  margin-top: 8px;
}
</style>

