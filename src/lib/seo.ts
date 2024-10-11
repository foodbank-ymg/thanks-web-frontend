import { Metadata } from 'next'

const siteName = '防府コミュニティフリッジ'
const description =
  '防府コミュニティフリッジは山口県防府市にある、食料品や日用品を提供したり、それを自由に受け取ることができるみんなの公共冷蔵です。'
const url = 'https://houfu-cf.org/'

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
