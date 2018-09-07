<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title class="headline">出演者一覧（敬称略、順不同）</v-card-title>
          <!-- <v-card-text>
            <p>名前 | 属性</p>
          </v-card-text> -->
          <v-data-table :headers="headers" :items="idols" hide-actions>
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.act }}</td>
              <td class="text-xs-center">{{ props.item.attribute }}</td>
              <td v-if="props.item.first" class="text-xs-center blue white--text"> ◯ </td>
              <td v-else class="text-xs-center"> - </td>
              <td v-if="props.item.second" class="text-xs-center blue white--text"> ◯ </td>
              <td v-else class="text-xs-center"> - </td>
              <td v-if="props.item.third" class="text-xs-center blue white--text"> ◯ </td>
              <td v-else class="text-xs-center"> - </td>
              <td v-if="props.item.fourth" class="text-xs-center blue white--text"> ◯ </td>
              <td v-else class="text-xs-center"> - </td>
            </template>
          </v-data-table>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
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
          attribute: 'Cute',
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '福原 綾香',
          act: '渋谷 凛',
          attribute: 'Cool',
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '原 早愉里',
          act: '本田 未央',
          attribute: 'Passion',
          first: true,
          second: true,
          third: true,
          fourth: true
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '青木 瑠璃子',
          act: '多田 李衣菜',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '朝井 彩加',
          act: '早坂 美玲',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '飯田 友子',
          act: '速水 奏',
          attribute: 'Cool',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '五十嵐 裕美',
          act: '双葉 杏',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '今井 麻夏',
          act: '佐々木 千枝',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '桜咲 千依',
          act: '白坂 小梅',
          attribute: 'Cool',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '大空 直美',
          act: '緒方 智絵里',
          attribute: 'Cute',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '金子 真由美',
          act: '藤本 里奈',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '黒沢 ともよ',
          act: '赤城 みりあ',
          attribute: 'Passion',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '小市 眞琴',
          act: '結城 晴',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '佐藤 亜美菜',
          act: '橘 ありす',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '洲崎 綾',
          act: '新田 美波',
          attribute: 'Cool',
          first: false,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '鈴木 絵理',
          act: '堀 裕子',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '鈴木 みのり',
          act: '藤原 肇',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '高田 憂希',
          act: '依田 芳乃',
          attribute: 'Passion',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '高橋 花林',
          act: '森久保 乃々',
          attribute: 'Cool',
          first: false,
          second: false,
          third: true,
          fourth: true
        },
        {
          name: '高野 麻美',
          act: '宮本 フレデリカ',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '立花 理香',
          act: '小早川 紗枝',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '花守 ゆみり',
          act: '佐藤 心',
          attribute: 'Passion',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '立花 理香',
          act: '小早川 紗枝',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        },
        {
          name: '立花 理香',
          act: '小早川 紗枝',
          attribute: 'Cute',
          first: true,
          second: true,
          third: false,
          fourth: false
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>


