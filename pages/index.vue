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
      <v-card class="pink darken-1 white--text">
        <v-card-text class="attributes">Cute</v-card-text>
        <v-card-text class="attributes-people">14 people</v-card-text>
      </v-card>
      <v-card class="blue darken-2 white--text">
        <v-card-text class="attributes">Cool</v-card-text>
        <v-card-text class="attributes-people">20 people</v-card-text>
      </v-card>
      <v-card class="yellow darken-3 white--text">
        <v-card-text class="attributes">Passion</v-card-text>
        <v-card-text class="attributes-people">16 people</v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs12 sm6 md6>
      <v-card>
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

    <v-flex xs12 sm3 xs3>
      <v-card class="">
        <div class="weather-info">
          <p>埼玉県 所沢市</p>
          <p v-if="condition.main == 'Fog'">曇り</p>
          <p>{{ condition.main }} {{ temp | roundUp }}&deg;C</p>
        </div>
      </v-card>
      <v-card class="">
        <div class="weather-info">
          <p>愛知県 名古屋市</p>
          <p v-if="condition2.main == 'Fog'">曇り</p>
          <p>{{ condition2.main }} {{ temp2 | roundUp }}&deg;C</p>
        </div>
      </v-card>
    </v-flex>
    <v-flex xs12 sm12 md12>
      <h4>各会場へのアクセス</h4>
      <i class="wi wi-day-sunny wi-flip-vertical"></i>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <v-card>
        <div class="ggmap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6716.394153569234!2d139.41745931117373!3d35.76827489348364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018de26f47cfbd3%3A0xa09b9b1c140042ce!2z44Oh44OD44OI44Op44Kk44OV44OJ44O844OgKOilv-atpuODieODvOODoCk!5e0!3m2!1sja!2sjp!4v1538066316550" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
      </v-card>
    </v-flex>
    <v-flex xs12 sm6 md6>
      <v-card>
        <div class="ggmap">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3260.800100082122!2d136.94454681321125!3d35.1865345645544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037051390295cf%3A0xa09364c226355e48!2z44OK44K044Ok44OJ44O844Og!5e0!3m2!1sja!2sjp!4v1538067110161" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
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
.attributes {
  font-size: 2.3rem;
  font-weight: bold;
  font-family: "Impact" !important;
}
.attributes-people {
  font-size: 1.5rem;
  text-align: right;
}
.weather-info {
  padding: 10px;
}
.weather-info p {
  font-weight: bold;
}
/* google map */
.ggmap {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.ggmap iframe,
.ggmap object,
.ggmap embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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


