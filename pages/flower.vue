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
              <td class="text-xs-center">{{ props.item.first }}</td>
              <td class="text-xs-center">{{ props.item.second }}</td>
              <td class="text-xs-center">{{ props.item.third }}</td>
              <td class="text-xs-center">{{ props.item.fourth }}</td>
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
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '福原 綾香',
          act: '渋谷 凛',
          attribute: 'Cool',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '原 早愉里',
          act: '本田 未央',
          attribute: 'Passion',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '青木 瑠璃子',
          act: '多田 李衣菜',
          attribute: 'Cool',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '朝井 彩加',
          act: '早坂 美玲',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '飯田 友子',
          act: '速水 奏',
          attribute: 'Cool',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '五十嵐 裕美',
          act: '双葉 杏',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '桜咲 千依',
          act: '白坂 小梅',
          attribute: 'Cool',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '大空 直美',
          act: '緒方 智絵里',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          id: 4,
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          id: 4,
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          id: 4,
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        },
        {
          id: 4,
          name: '藍原 ことみ',
          act: '一ノ瀬 志希',
          attribute: 'Cute',
          first: '参加',
          second: '不参加',
          third: '参加',
          fourth: '不参加'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>


