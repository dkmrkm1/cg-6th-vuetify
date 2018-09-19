<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <idols-list />
    </v-layout>
  </v-container>
</template>

<script>
import IdolsList from '~/components/IdolsList.vue'

export default {
  data () {
    return {}
  },
  components: {
    IdolsList
  }
}
</script>

<style scoped>
</style>


