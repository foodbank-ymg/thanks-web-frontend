import { Metadata } from 'next'

const siteName = 'フードバンク山口ありがとうWebsite'
const description =
  'フードバンク山口を利用された方からの「ありがとう」の気持ちを集めたWebサイトです。'
const url = 'https://thankyou.fbyamaguchi.org/'

export const SEO_DEFAULT: Metadata = {
  metadataBase: new URL(url),
  title: siteName,
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
    images: 'ogp.png',
  },
}
