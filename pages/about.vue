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
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card style="margin-top:10px;">
          <v-card-title class="headline">問い合わせ</v-card-title>
          <v-card-text>
            <p>このサイトについてのご意見、ご要望等ありましたら下記フォームより送信頂くか、<a href="https://twitter.com/duuun1002" target="_blank">@duuun1002</a> までご連絡ください。</p>
          </v-card-text>
            <!-- <v-form name="contact" netlify>
            <input type="hidden" name="contact" value="contact" />
            <v-flex xs12 sm6 md6>
              <v-text-field name="name" label="Name" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field name="email" label="E-mail" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md12>
              <v-text-field name="message" label="Message" required></v-text-field>
            </v-flex>
            <v-btn type="submit" class="orange darken-2">送信</v-btn>
          </v-form> -->
          <form name="contact" netlify-honeypot="bot-field" action="thank-you"  data-netlify="true" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden"  style="display: none;">
              <label>Don’t fill this out: <input name="bot-field"></label>
            </p>
            <p>
              <label>Email: <input type="text" name="name"></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type=”submit”>Send</button>
            </p>
          </form>
        </v-card>
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
export default {
  data () {
    return {
      ok: true
    }
  },
  method: {}
}
</script>

