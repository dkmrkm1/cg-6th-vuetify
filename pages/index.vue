<template>
  <v-container grid-list-xl>
  <v-layout cow wrap>
    <v-flex xs12 sm12 md12>
      <v-card class="card-live">
        <v-img class="white--text" height="350px" src="/live.jpg">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">to the 6thLIVE...</span>
                <h1 class="count" style="padding:14px;"><span style="font-size:6rem;">{{ days }} </span><span style="font-size:4rem;">days</span>　{{ hours }}{{ minutes }}{{ seconds }}</h1>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
      </v-card>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <v-card>
        <v-card-title class="headline">運営の手引き</v-card-title>
        <v-card-text class="card-text-setlist">
          <p class="card-text-setlist-title">◉ セットリスト予想</p>
          <p>ライブ当日毎のシンデレラガールズ出演者一覧と予想されるセットリストを記載しております。</p>
          <p class="card-text-setlist-title">◉ フラワースタンド</p>
          <p>有志の方のフラワースタンド企画について纏めさせて頂いております。</p>
          <p class="card-text-setlist-title">◉ このサイトについて</p>
          <p>当サイトについて記載しております。お問い合わせ・ご意見・ご要望等ありましたらこちらよりお願い致します。</p>
          <p style="display:inline-block; margin-top:30px;">
            ※本サイトの運営は、一個人がシンデレラガールズ6thLIVEを盛り上げたい一心で、非営利にて行なっております。当日は本人ももちろん参加致します。
          </p>
          <div>
            <a href="https://twiter.com/share?url=https://pensive-lichterman-504d94.netlify.com&hashtags=imas_cg6th&text=%e3%81%82%e3%81%a863%e6%97%a5%21%21%20%7c%20%e3%82%b7%e3%83%b3%e3%83%87%e3%83%ac%e3%83%a9%e3%82%ac%e3%83%bc%e3%83%ab%e3%82%ba6thLIVE%e3%83%95%e3%82%a1%e3%83%b3%e3%82%b5%e3%82%a4%e3%83%88"
              rel="nofollow" target="_blank">リンク</a>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <v-card>
        <v-card-title class="headline">[埼玉] メットライフドームまでのアクセス
          <v-chip color="blue" text-color="white">
            <v-avatar>
              <v-icon color="white">whatshot</v-icon>
            </v-avatar>11/10(土)
          </v-chip>
          <v-chip color="teal" text-color="white">
            <v-avatar>
              <v-icon color="white">whatshot</v-icon>
            </v-avatar>11/11(日)
          </v-chip>
        </v-card-title>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <v-card>
        <v-card-title class="headline">[愛知] ナゴヤドームまでのアクセス
          <v-chip color="blue" text-color="white">
            <v-avatar>
              <v-icon color="white">whatshot</v-icon>
            </v-avatar>12/1(土)
          </v-chip>
          <v-chip color="teal" text-color="white">
            <v-avatar>
              <v-icon color="white">whatshot</v-icon>
            </v-avatar>12/2(日)
          </v-chip>
        </v-card-title>
        <v-card-text>
          <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
          <p>For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.</p>
          <p>If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.</p>
          <p>Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p>
          <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
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
    <v-flex xs12 sm6 md6>
      <v-card>
        <div id="map"></div>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<style scoped>
#map {
  width: 600px;
  height: 500px;
}
.card-live {
  min-height: 350px;
}
.count {
  font-family: "Lobster", cursive;
}
.card-text-setlist {
  font-size: 1.3rem;
}
.card-text-setlist-title {
  font-weight: bold;
  font-size: 1.4rem;
}
</style>

<script>
import $moment from 'moment'

export default {
  head () {
    return {
      script: [
        {
          src:
            'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Lobster'
        }
      ]
    }
  },
  data () {
    return {
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
      map: null
    }
  },
  mounted () {
    const element = document.getElementById('map')
    const map = new this.$gmap.Map(element, {
      center: { lat: 35.685175, lng: 139.7528 },
      zoom: 15
    })
    this.map = map
  },
  created: function () {
    setInterval(() => {
      this.getTime()
    }, 1000)
  },
  methods: {
    getTime: function () {
      let duration = this.getNowTime()

      this.days = Math.floor(duration.asDays())
      this.hours = ('0' + duration.hours()).slice(-2) + ' h '
      this.minutes = ('0' + duration.minutes()).slice(-2) + ' m '
      this.seconds = ('0' + duration.seconds()).slice(-2) + ' s '
    },
    getNowTime: function () {
      let diff = $moment('2018-11-10').diff($moment())
      let duration = $moment.duration(diff)
      return duration
    }
  }
}
</script>


