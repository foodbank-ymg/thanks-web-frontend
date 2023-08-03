import { ILetter } from '../src/types/letter'

export const news20210313: ILetter = {
  id: '2021-03-13',
  title: 'スオウパーティ山口を開校しました',
  description:
    '山口市の商店街にIT塾スオウパーティの山口教室を開校しました。防府教師に続き2校目となります。',
  thumbnail: '/news/20210313/thumbnail.jpg',
  date: '2021-03-13T09:00:00.000Z',
  tags: ['教育'],
  paragraphs: [
    {
      type: 'text',
      text: '山口教室は生徒 4 名でのスタートとなりました（この日は 1 名欠席）。親御さんも同席することが可能です。 防府教室と同様に 1 つの大きなテーブルを囲むスタイルになっています。',
    },
    {
      type: 'image',
      image: {
        src: '/news/20210313/image1.jpg',
        width: 1200,
        height: 900,
        alt: '冒頭でプログラミングの概要を説明している講師',
      },
    },
    {
      type: 'text',
      text: '少人数個別指導は変わりません。同じ題材で基礎を学びつつ、応用や拡張は生徒それぞれの独創性に委ね、個別に指導を行ってまいります。',
    },
    {
      type: 'image',
      image: {
        src: '/news/20210313/image2.jpg',
        width: 1200,
        height: 900,
        alt: '教室外観',
      },
    },
    {
      type: 'text',
      text: '随時、無料体験を承っております。兄弟や友達をお誘い合わせの上、まずは無料体験をお試しください。詳細はスオウパーティの Web サイトで確認ください。',
    },
    {
      type: 'link',
      url: 'https://thwoo.party',
    },
  ],
}
