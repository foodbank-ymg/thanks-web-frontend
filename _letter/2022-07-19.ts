import { ILetter } from '../src/types/letter'

export const news20220719: ILetter = {
  id: '2022-07-19',
  title: '山口大学インターン生の受け入れ',
  description:
    '山口大学工学部の知能情報工学科の1年生13人が2ヶ月間ソフトウェア開発の基礎教養を学びました。',
  thumbnail: '/news/20220719/thumbnail.jpg',
  date: '2022-07-19T09:00:00.000Z',
  tags: ['会社', '教育'],
  isRecommended: true,
  paragraphs: [
    {
      type: 'text',
      text: '代表の原田が 5 月に同学科の学外講師枠で「ソフトウェア開発の概論」と題して講義をしました。そこで 6〜7 月の短期インターンを募集したところ 13 名の学生が希望し、全員を受け入れてスタートしました。インターンは業界/企業の就業体験を意味しますが、入学して間もない学生向けに対して、ソフトウェア開発の道を歩んでいくための基礎知識の習得と意欲を高める場を提供しました。',
    },
    {
      type: 'text',
      text: '「現地作業」と称して 2 週間毎に山口教室に集まり、Web サイトやスクラッチの開発を通して設計の考え方からコーディングの細かな Tips まで指導しました。関連するキーワードを取り上げては、その経緯や現状を口頭や板書で詳しく伝えました。人数が多いのと各学生の都合があるため、火曜・金曜・土曜の 3 つの曜日の組に分けました。特別な事情を除き参加率は 100％でした。',
    },
    {
      type: 'image',
      image: {
        src: '/news/20220719/image1.jpg',
        width: 1200,
        height: 800,
        alt: '土曜日組の作業風景',
      },
    },
    {
      type: 'text',
      text: 'プログラミング言語やコマンドラインの習得に関して、自分の空き時間で自由に進められるよう、初学者向けオンライン学習サービスのprogateを法人契約して全講座を開放しました。管理側としても各学生の進捗を確認するのに役立ちました。',
    },
    {
      type: 'link',
      url: 'https://prog-8.com/dashboard',
    },
    {
      type: 'text',
      text: 'Web エンジニアの標準ツールである GitHub のアカウントを作り、GitHubPage と呼ばれる機能で Web サイトを公開して自動更新する仕組みを伝授しました。progate で学んだ技術をそのまま放置せず、自身や所属するコミュニティの Web サイトを構築して活用することを促しました。マウス操作だけで手軽に Web サイトを公開できる時代ですが、基礎部分に触れることで Web 全体の仕組みを深く知るきっかけになればと考えています。',
    },
    {
      type: 'image',
      image: {
        src: '/news/20220719/image2.jpg',
        width: 1200,
        height: 800,
        alt: '火曜日組の作業風景',
      },
    },
    {
      type: 'text',
      text: '短い期間でしたが、学生はソフトウェア開発の世界をより身近にじることができたはずです。工学部生は 2 年次より宇部に拠点を移しすぐに顔を合わせることは叶いませんが、今後はオンライン等で気軽に連絡や協業ができればと考えています。',
    },
  ],
}
