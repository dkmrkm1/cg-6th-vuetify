<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">このサイトについて</v-card-title>
        <v-card-text>
          <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
          <p>正式名称：THE IDOLM@STER CINDERELLA GIRLS MERRY-GO-ROUNDOME!!!</p>
          <p>公式のページはこちらのページをご覧下さい。
            <a href="https://idolmaster.jp/event/cinderella6th.php" target="_blank">THE IDOLM@STER CINDERELLA GIRLS 6thLIVE</a>
          </p>
          <hr class="my-3">
          <p></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-card style="margin-top:10px;">
        <v-card-title class="headline">このサイトについて</v-card-title>
        <v-card-text>
          <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
          <hr class="my-3">
          <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
          <br>
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-card style="margin-top:10px;">
        <v-card-title class="headline">問い合わせ</v-card-title>
        <v-card-text>
          <p>このサイトについてのご意見、ご要望等ありましたら下記フォームより送信頂くか、@duuunまでご連絡ください。</p>
        </v-card-text>

        <form name="cnotactform" method="POST" netlify>
          <p><label>お名前：<input type="text" name="name"></label></p>
          <p><label>メールアドレス：<input type="email" name="email"></label></p>
          <p><label>メッセージ：<textarea name="message"></textarea></label></p>
          <button type="submit">送信</button>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
</style>
