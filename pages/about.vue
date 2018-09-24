<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title class="headline">このサイトについて</v-card-title>
          <v-card-text>
            <p>2018年11月10日よりメットライフドームにて開催されるシンデレラガールズ6thライブの非公式ファンサイトです。<br><a href="https://twitter.com/duuun1002" target="_blank">@duuun1002</a>が個人で運営しております。</p>
            <p>こちらのページはあくまでファンサイトとなりますので、公式の情報は下記ページをご覧下さい。</p>
            <p><a href="https://idolmaster.jp/event/cinderella6th.php" target="_blank">THE IDOLM@STER CINDERELLA GIRLS 6thLIVE</a></p>
            <p>このサイトへのご意見、ご要望等ありましたら下記フォームもしくは上記TwitterアカウントのDMよりお寄せ下さい。</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <!-- お問い合わせフォーム -->
        <about-form />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.v-form {
  padding: 20px;
}
.v-card {
  min-height: 100px;
}
.child {
  color: red;
}
.is-active {
  font-weight: bold;
}
.text-field {
  padding: 10px;
}
.about_input {
  color: gray !important;
}
</style>

<script>
import AboutForm from '~/components/AboutForm.vue'

export default {
  data () {
    return {}
  },
  method: {},
  components: {
    AboutForm
  }
}
</script>

