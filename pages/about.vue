<template>
  <!-- <v-layout column justify-center> -->
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title class="headline">このサイトについて</v-card-title>
          <v-card-text>
            <p>2018年11月10日よりメットライフドームにて開催されるシンデレラガールズ6thライブの非公式ファンサイトです。<a href="https://twitter.com/duuun1002" target="_blank">@duuun1002</a>が個人で非営利にて運営しております。</p>
            <p>正式名称：THE IDOLM@STER CINDERELLA GIRLS MERRY-GO-ROUNDOME!!!</p>
            <p>公式サイトは下記ページをご覧下さい。</p>
            <p><a href="https://idolmaster.jp/event/cinderella6th.php" target="_blank">THE IDOLM@STER CINDERELLA GIRLS 6thLIVE</a></p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title class="headline">このサイトについて</v-card-title>
          <v-card-text>
            <div v-if="ok">TEXT</div>
            
            <v-btn v-on:click="change=isChild=!isChild">Change</v-btn>
            <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
            <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
            <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
            <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
            <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
            <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card style="margin-top:10px;">
          <v-card-title class="headline">問い合わせ</v-card-title>
          <v-card-text>
            <p>このサイトについてのご意見、ご要望等ありましたら下記フォームより送信頂くか、<a href="https://twitter.com/duuun1002">@duuun1002</a>までご連絡ください。</p>
          </v-card-text>
          
          <!-- <form name="contact" netlify>
            <input type="hidden" name="form-name" value="contact">
            <p><label>お名前：<input type="text" name="name"></label></p>
            <p><label>メール：<input type="text" name="email"></label></p>
            <p><label>メッセージ：<textarea name="message"></textarea></label></p>
            <button type="submit">送信</button>
          </form> -->
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.child {
  color: red;
}
.is-active {
  font-weight: bold;
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

