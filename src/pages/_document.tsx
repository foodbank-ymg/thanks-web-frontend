import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head />
      {/* 全体共通フォント設定（強調や見出しのみにフォントを上書き） */}
      <body className='palt bg-myyellowpale font-zenmaru text-[16px] text-mybrown'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
