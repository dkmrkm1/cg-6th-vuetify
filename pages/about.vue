<template>
  <!-- <v-layout column justify-center> -->
  <v-container grid-list-md>
  <v-layout row wrap>
    <v-flex xs12 sm6 md6>
      <v-card>
        <v-card-title class="headline">このサイトについて</v-card-title>
        <v-card-text>
          <p>2018年11月10日より開催されるシンデレラガールズ6thライブの"非公式"ファンサイトです。</p>
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
          <p>2018年11月10日より開催されるシンデレラガールズ6thライブのファンサイトです。</p>
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
          <p>このサイトについてのご意見、ご要望等ありましたら下記フォームより送信頂くか、@duuunまでご連絡ください。</p>
        </v-card-text>
        <form name="contactform" netlify>
          <input type="hidden" name="contact-form" value="contact">
          <p><label>お名前：<input type="text" name="name"></label></p>
          <p><label>メールアドレス：<input type="email" name="email"></label></p>
          <p><label>メッセージ：<textarea name="message"></textarea></label></p>
          <button type="submit">送信</button>
        </form>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<style scoped>
</style>
