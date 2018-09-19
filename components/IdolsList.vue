<template>
  <v-flex xs12 sm12 md12>
    <v-card style="min-height:100px;">
      <v-card-title class="headline">出演者一覧(敬称略)<input type="text" v-model="searchIdol" placeholder="検索" class="search-idol" tabindex="-1"></v-card-title>
      <!-- <v-data-table :headers="headers" :items="idols" hide-actions> -->
      <v-data-table :headers="headers" :items="fileterdIdols" hide-actions>
        <template slot="items" slot-scope="props">
          <td class="text-xs-center idol-text">{{ props.item.name }}</td>
          <td class="text-xs-center idol-text">{{ props.item.act }}</td>
          <td class="text-xs-center">{{ props.item.attribute }}</td>
          <td v-if="props.item.first" class="text-xs-center orange lighten-1 white--text idol-attribute"> ● </td>
          <td v-else class="text-xs-center idol-attribute"> - </td>
          <td v-if="props.item.second" class="text-xs-center orange lighten-1 white--text idol-attribute"> ● </td>
          <td v-else class="text-xs-center idol-attribute"> - </td>
          <td v-if="props.item.third" class="text-xs-center orange lighten-1 white--text idol-attribute"> ● </td>
          <td v-else class="text-xs-center idol-attribute"> - </td>
          <td v-if="props.item.fourth" class="text-xs-center orange lighten-1 white--text idol-attribute"> ● </td>
          <td v-else class="text-xs-center idol-attribute"> - </td>
        </template>
      </v-data-table>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      searchIdol: '',
      headers: [
        { text: '名前', value: 'name', sortable: false },
        { text: '配役', value: 'act', sortable: false },
        { text: '属性', value: 'attribute' },
        { text: '1日目(11/10)', value: 'first' },
        { text: '2日目(11/11)', value: 'second' },
        { text: '3日目(12/1)', value: 'third' },
        { text: '4日目(12/2)', value: 'fourth' }
      ],
      idols: [
        {
          name: '大橋 彩香',
          act: '島村 卯月',
          phonetic_name: 'oohasi ayaka',
          phonetic_act: 'simamura uduki',
          attribute: 'Cute',
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '福原 綾香',
          act: '渋谷 凛',
          phonetic_name: 'fukuhara ayaka',
          phonetic_act: 'shibuya rin',
          attribute: 'Cool',
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '原 紗友里',
          act: '本田 未央',
          phonetic_name: 'hara sayuri',
          phonetic_act: 'honda mio',
          attribute: 'Passion',
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '会沢 紗弥',
          act: '関 裕美',
          phonetic_name: 'aizawa saya',
          phonetic_act: 'seki hiromi',
          attribute: 'Cute',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          phonetic_name: 'aihara kotomi',
          phonetic_act: 'itinose siki',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '青木 志貴',
          act: '二宮 飛鳥',
          phonetic_name: 'aoki siki',
          phonetic_act: 'ninomiya asuka',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '青木 瑠璃子',
          act: '多田 李衣菜',
          phonetic_name: 'aoki ruriko',
          phonetic_act: 'tada riina',
          attribute: 'Cool',
          first: true,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '朝井 彩加',
          act: '早坂 美玲',
          phonetic_name: 'asai ayaka',
          phonetic_act: 'hayasaka mirei',
          attribute: 'Cute',
          first: false,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '飯田 友子',
          act: '速水 奏',
          phonetic_name: 'iida yuuko',
          phonetic_act: 'hayami kanade',
          attribute: 'Cool',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '五十嵐 裕美',
          act: '双葉 杏',
          phonetic_name: 'igarasi hiromi',
          phonetic_act: 'simamura uduki',
          attribute: 'Cute',
          first: false,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '今井 麻夏',
          act: '佐々木 千枝',
          phonetic_name: 'imai asaka',
          phonetic_act: 'sasaki tie',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '上坂 すみれ',
          act: 'アナスタシア',
          phonetic_name: 'uesaka sumire',
          phonetic_act: 'anasutasia',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '桜咲 千依',
          act: '白坂 小梅',
          phonetic_name: 'ousaki tie',
          phonetic_act: 'sirasaka koume',
          attribute: 'Cool',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '大空 直美',
          act: '緒方 智絵里',
          phonetic_name: 'oozora naomi',
          phonetic_act: 'ogata tieri',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '大坪 由佳',
          act: '三村 かな子',
          phonetic_name: 'ootubo yuka',
          phonetic_act: 'mimura kanako',
          attribute: 'Cute',
          first: true,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '金子 真由美',
          act: '藤本 里奈',
          phonetic_name: 'kaneko mayumi',
          phonetic_act: 'fujimoto rina',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '金子 有希',
          act: '高森 藍子',
          phonetic_name: 'kaneko yuuki',
          phonetic_act: 'takamori aiko',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '嘉山 未紗',
          act: '脇山 珠美',
          phonetic_name: 'kayama misa',
          phonetic_act: 'wakiyama tamami',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '木村 珠莉',
          act: '相葉 夕美',
          phonetic_name: 'kimura juri',
          phonetic_act: 'aiba yuumi',
          attribute: 'Passion',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '黒沢 ともよ',
          act: '赤城 みりあ',
          phonetic_name: 'kurosawa tomoyo',
          phonetic_act: 'akagi miria',
          attribute: 'Passion',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '小市 眞琴',
          act: '結城 晴',
          phonetic_name: 'koiti makoto',
          phonetic_act: 'yuuki haru',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '佐藤 亜美菜',
          act: '橘 ありす',
          phonetic_name: 'satou amina',
          phonetic_act: 'tatibana arisu',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '下地 紫野',
          act: '中野 有香',
          phonetic_name: 'simoji sino',
          phonetic_act: 'nakano yuka',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '洲崎 綾',
          act: '新田 美波',
          phonetic_name: 'suzaki aya',
          phonetic_act: 'nitta minami',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '鈴木 絵理',
          act: '堀 裕子',
          phonetic_name: 'suzuki eri',
          phonetic_act: 'hori yuuko',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '鈴木 みのり',
          act: '藤原 肇',
          phonetic_name: 'suzuki minori',
          phonetic_act: 'fujiwara hajime',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '高田 憂希',
          act: '依田 芳乃',
          phonetic_name: 'takada yuuki',
          phonetic_act: 'simamura uduki',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '高橋 花林',
          act: '森久保 乃々',
          phonetic_name: 'takahasi karin',
          phonetic_act: 'morikubo nono',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '高野 麻美',
          act: '宮本 フレデリカ',
          phonetic_name: 'takano asami',
          phonetic_act: 'miyamoto furederika',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '高森 奈津美',
          act: '前川 みく',
          phonetic_name: 'takamori natumi',
          phonetic_act: 'maekawa miku',
          attribute: 'Cute',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '武田 羅梨沙 多胡',
          act: '喜多見 柚',
          phonetic_name: 'takeda rarisa tago',
          phonetic_act: 'kitami yuzu',
          attribute: 'Passion',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '田澤 茉純',
          act: '浜口 あやめ',
          phonetic_name: 'tazawa masumi',
          phonetic_act: 'hamaguti ayame',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '立花 理香',
          act: '小早川 紗枝',
          phonetic_name: 'tatibana rika',
          phonetic_act: 'kobayakawa sae',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '伊達 朱里紗',
          act: '難波 笑美',
          phonetic_name: 'date arisa',
          phonetic_act: 'nanba emi',
          attribute: 'Passion',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '田辺 留依',
          act: '荒木 比奈',
          phonetic_name: 'tanabe rui',
          phonetic_act: 'araki hina',
          attribute: 'Cool',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '種﨑 敦美',
          act: '五十嵐 響子',
          phonetic_name: 'tabezaki atumi',
          phonetic_act: 'igarasi kyouko',
          attribute: 'Cute',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '千菅 春香',
          act: '松永 涼',
          phonetic_name: 'tisuga haruka',
          phonetic_act: 'matunaga ryou',
          attribute: 'Cool',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '津田 美波',
          act: '小日向 美穂',
          phonetic_name: 'tuda minami',
          phonetic_act: 'kohinata miho',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '東山 奈央',
          act: '川島 瑞樹',
          phonetic_name: 'touyama nao',
          phonetic_act: 'kawasima mizuki',
          attribute: 'Cool',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '都丸 ちよ',
          act: '椎名 法子',
          phonetic_name: 'tomaru tiyo',
          phonetic_act: 'siina norko',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '長島 光那',
          act: '上条春菜',
          phonetic_name: 'nagasima mina',
          phonetic_act: 'kamijou haruna',
          attribute: 'Cool',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '中島 由貴',
          act: '乙倉 悠貴',
          phonetic_name: 'nakasima yuki',
          phonetic_act: 'otokura yuuki',
          attribute: 'Cute',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '新田 ひより',
          act: '道明寺 歌鈴',
          phonetic_name: 'nitta hiyori',
          phonetic_act: 'doumyouji karin',
          attribute: 'Passion',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: 'のぐち ゆり',
          act: '及川 雫',
          phonetic_name: 'noguti yuri',
          phonetic_act: 'oikawa sizuku',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '花井 美春',
          act: '村上 巴',
          phonetic_name: 'hanai miharu',
          phonetic_act: 'murakami tomoe',
          attribute: 'Passion',
          first: false,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '花守 ゆみり',
          act: '佐藤 心',
          phonetic_name: 'hanamori yumiri',
          phonetic_act: 'satou sin',
          attribute: 'Passion',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '原田 彩楓',
          act: '三船 美優',
          phonetic_name: 'harada sayaka',
          phonetic_act: 'mifune miyu',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: false
        },
        {
          name: '原 優子',
          act: '向井 拓海',
          phonetic_name: 'hara yuuko',
          phonetic_act: 'mukai takumi',
          attribute: 'Passion',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '春瀬 なつみ',
          act: '龍崎 薫',
          phonetic_name: 'haruse natumi',
          phonetic_act: 'ryuuzaki kaoru',
          attribute: 'Passion',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '藤本 彩花',
          act: '棟方 愛海',
          phonetic_name: 'fujimoto ayaka',
          phonetic_act: 'munakata atumi',
          attribute: 'Cute',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '渕上 舞',
          act: '北条 花蓮',
          phonetic_name: 'fuchigami mai',
          phonetic_act: 'houjou karen',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '牧野 由依',
          act: '佐久間 まゆ',
          phonetic_name: 'makino yui',
          phonetic_act: 'sakuma mayu',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '松井 恵理子',
          act: '神谷 奈緒',
          phonetic_name: 'matui eriko',
          phonetic_act: 'kamiya nao',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '松嵜 麗',
          act: '諸星 きらり',
          phonetic_name: 'matuzaki rei',
          phonetic_act: 'morobosi kirari',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '松田 颯水',
          act: '星 輝子',
          phonetic_name: 'matuda satumi',
          phonetic_act: 'hosi syouko',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '三宅 麻理恵',
          act: '安部 奈々',
          phonetic_name: 'miyake marie',
          phonetic_act: 'abe nana',
          attribute: 'Cute',
          first: true,
          second: true,
          third: true,
          fourth: false
        },
        {
          name: '村中 知',
          act: '大和 亜季',
          phonetic_name: 'muranaka tomo',
          phonetic_act: 'yamato aki',
          attribute: 'Cool',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '杜野 まこ',
          act: '姫川 友紀',
          phonetic_name: 'morino mako',
          phonetic_act: 'himekawa yuki',
          attribute: 'Passion',
          first: true,
          second: false,
          third: false,
          fourth: false
        },
        {
          name: '安野 希世乃',
          act: '木村 夏樹',
          phonetic_name: 'yasuno kiyono',
          phonetic_act: 'kimura natuki',
          attribute: 'Passion',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '山下 七海',
          act: '大槻 唯',
          phonetic_name: 'yamasita nanami',
          phonetic_act: 'ootuki yui',
          attribute: 'Passion',
          first: true,
          second: false,
          third: false,
          fourth: true
        },
        {
          name: '山本 希望',
          act: '城ヶ崎 莉嘉',
          phonetic_name: 'yamamoto nozomi',
          phonetic_act: 'jougasaki rika',
          attribute: 'Passion',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '佳村 はるか',
          act: '城ヶ崎 美嘉',
          phonetic_name: 'yosimura haruka',
          phonetic_act: 'jougasaki mika',
          attribute: 'Passion',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: 'ルゥ ティン',
          act: '塩見 周子',
          phonetic_name: 'ruu thin',
          phonetic_act: 'siomi syuuko',
          attribute: 'Cool',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '三宅 麻理恵',
          act: '安部 奈々',
          phonetic_name: 'oohasi ayaka',
          phonetic_act: 'simamura uduki',
          attribute: 'Cute',
          first: true,
          second: true,
          third: true,
          fourth: false
        },
        {
          name: '和氣 あず未',
          act: '片桐 早苗',
          phonetic_name: 'waki azumi',
          phonetic_act: 'katagiri sanae',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        }
      ]
    }
  },
  computed: {
    fileterdIdols: function () {
      let data = this.idols
      let filterIdols = this.searchIdol && this.searchIdol.toLowerCase()

      if (filterIdols) {
        data = data.filter(function (row) {
          if (filterIdols) {
            return Object.keys(row).some(function (key) {
              if (
                String(row[key])
                  .toLowerCase()
                  .indexOf(filterIdols) > -1
              ) {
                return true
              }
            })
          }
          return row
        })
      }
      return data
    }
  }
}
</script>

<style scoped>
.idol-text {
  min-width: 119px;
}
.idol-attribute {
  max-width: 107px;
}
.img-count {
  padding-left: 28px;
}
.attribute,
.img-count {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.headline th {
  text-align: center;
}
.search-idol {
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
  margin-left: 40px;
  border-radius: 13px;
}
</style>