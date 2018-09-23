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
    <v-flex xs12 sm3 md3>
      <v-card>
        <v-card-title class="headline">開催概要</v-card-title>
        <v-card-text>
          <p></p>
        </v-card-text>
      </v-card>

      <!-- 天気予報API -->
      <v-card>
        <v-card-title class="headline">現地の天気</v-card-title>
        <div class="weather-info">
          <p>埼玉</p>
          <p>{{ condition.main }}</p>
          <p>{{ temp | roundUp }}</p>
        </div>
        <div class="weather-info">
          <p>名古屋</p>
          <p>{{ condition2.main }}</p>
          <p>{{ temp2 | roundUp }}</p>
        </div>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 md6>
      <v-card>
        <v-card-title class="headline">運営の手引き</v-card-title>
        <v-card-text>
          <p><strong>◉ 出演者一覧</strong></p>
          <p>各公演に参加される皆様を記載しています。名前で検索、属性・出演日でソートも可能にしています。</p>
          <p><strong>◉ セットリスト予想（作製中）</strong></p>
          <p>ライブ当日毎のシンデレラガールズ出演者一覧と予想されるセットリストを記載しています。</p>
          <p><strong>◉ フラワースタンド企画（作製中）</strong></p>
          <p>有志の方のフラワースタンド企画について纏めさせて頂いています。</p>
          <p><strong>◉ このサイトについて</strong></p>
          <p>当サイトについて記載しております。お問い合わせ・ご意見・ご要望等ありましたらこちらよりお願い致します。</p>
          <p style="display:inline-block; margin-top:10px;">
            ※本サイトの運営は、一個人がシンデレラガールズ6thLIVEを盛り上げたい一心で、非営利にて行なっております。当日は本人ももちろん参加致します。
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 sm3 md3>
      <v-card>
        <v-card-text>
          <!-- SNS -->
          <no-ssr>
            <div>
              <a href="https://twiter.com/share?url=https://cg-6th.fun&hashtags=imas_cg_6th&text=%e3%81%82%e3%81%a863%e6%97%a5%21%21%20%7c%20%e3%82%b7%e3%83%b3%e3%83%87%e3%83%ac%e3%83%a9%e3%82%ac%e3%83%bc%e3%83%ab%e3%82%ba6thLIVE%e3%83%95%e3%82%a1%e3%83%b3%e3%82%b5%e3%82%a4%e3%83%88"
                rel="nofollow" target="_blank">リンク</a>
            </div>
          </no-ssr>
          <!-- SNS -->
        </v-card-text>
      </v-card>
      <v-card>
        <v-card-title class="headline">運営の手引き</v-card-title>
        <v-card-text>
          hogehoge
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
        <div id="map"></div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<style scoped>
.v-card {
  min-height: 100px;
  margin-bottom: 10px;
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
import axios from 'axios'

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
      city: null,
      temp: null,
      condition: {
        main: null
      },
      city2: null,
      temp2: null,
      condition2: {
        main: null
      }
    }
  },
  components: {},
  mounted: function () {
    axios
      .get(
        // 'https://api.openweathermap.org/data/2.5/weather?q={Saitama, Osaka},jp&units=metric&appid=0dc0edc4f6d138925d57d993359abf92'
        'https://api.openweathermap.org/data/2.5/group?id=1853226,1856057&appid=0dc0edc4f6d138925d57d993359abf92'
      )
      .then(
        function (response) {
          this.city = response.data.list[0].name
          this.temp = response.data.list[0].main.temp
          this.condition = response.data.list[0].weather[0]

          this.city2 = response.data.list[1].name
          this.temp2 = response.data.list[1].main.temp
          this.condition2 = response.data.list[1].weather[0]
        }.bind(this)
      )
      .catch(function (error) {
        console.log(error)
      })
  },
  filters: {
    roundUp (value) {
      return Math.floor((value - 273.15) * Math.pow(10, 1)) / Math.pow(10, 1) // ケルビン => 摂氏
    }
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


