import moment from 'moment'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import AboutIntroduction from '@/components/AboutIntroduction'
import HeroLetter from '@/components/HeroLetter'
import LatestLetter from '@/components/LatestLetter'
import LinkButtonWhite from '@/components/LinkButtonWhite'
import LinkButtonYellow from '@/components/LinkButtonYellow'
import PhotoGallary from '@/components/PhotoGallary'
import { GetApprovedPosts } from '@/data/posts'
import { Post } from '@/types/Post'

type Props = {
  posts: Post[]
}

const HomePage = ({ posts }: Props) => {
  const router = useRouter()

  return (
    <>
      {/* ヒーローセクション */}
      <HeroLetter />
      {/* ヒーローセクションにつづく形のメッセージ */}
      <div className='text-h flex flex-col gap-y-[24px] rounded-b-common bg-mywhite pb-[60px] text-center md:gap-0'>
        <div className='flex flex-col justify-center md:flex-row'>
          <p>あなたあての</p>
          <p>&quot;ありがとう&quot;が届きました。</p>
        </div>
        <div className='flex flex-col justify-center md:flex-row'>
          <p>そして、みなさまあて</p>
          <p>の&quot;ありがとう&quot;を届けます。</p>
        </div>
      </div>

      {/* 冒頭説明 */}
      <div className='pt-2h pb-2h relative bg-smile bg-[length:15vw_15vw] bg-[left_5vw_top_10vw] bg-no-repeat'>
        <div className='mx-auto px-[32px]'>
          <div className='text-h flex flex-col items-center justify-center gap-[0.5em] text-center md:flex-row md:gap-0'>
            <div className='relative w-fit'>
              <p className='z-10 px-[0.5em] after:absolute after:inset-0 after:z-[-10] after:h-[0.75em] after:translate-y-[1em] after:rounded-full after:bg-myyellow'>
                ここは&quot;ありがとう&quot;が
              </p>
            </div>
            <div className='relative w-fit md:translate-x-[-1.25vw]'>
              <p className='z-10 px-[0.5em] after:absolute after:inset-0 after:z-[-10] after:h-[0.75em] after:translate-y-[1em] after:rounded-full after:bg-myyellow'>
                集まるサイトです
              </p>
            </div>
          </div>
          <div className='my-[32px] mx-auto max-w-[480px]'>
            <p>私たち「フードバンク山口」は、やまぐちでフードバンク活動をしています。</p>
            <p>
              私たちがお手伝いさせていただいた、食料資源を介した繋がりから生まれた“ありがとう”が、
              このサイトに集まりはじめました。
            </p>
          </div>
          <div className='my-[32px] mx-auto max-w-[480px]'>
            <p>
              活動ひとつひとつは小さいかもしれませんが、受け取られた方々からとても大きな“ありがとう”をいただいています。
            </p>
            <p>これからもみなさんといっしょに、この活動と“ありがとう”を広めていきます。</p>
          </div>
        </div>
        {/* 花のアイコン */}
        <div className='absolute right-[16vw] bottom-[-1.5vw] z-10 aspect-[3/4] w-[8vw] min-w-[45px] max-w-[110px] rotate-[5deg]'>
          <Image src='illust_heartflower_l.svg' fill alt='' className=' ' />
        </div>
      </div>

      {/* 直近の投稿と最近のおたよりページへのリンク */}
      <div className='relative pb-[24px] md:pb-[32px]'>
        <LatestLetter posts={posts} />
        <div className='absolute bottom-0 z-10 flex w-full justify-center'>
          <LinkButtonYellow
            label='もっとおたよりを見る'
            onClick={() => router.push('/latest-posts')}
          />
        </div>
      </div>

      {/* 写真ギャラリーと月毎のおたよりページへのリンク */}
      <div className='relative text-center'>
        {/* この下部の余白が花のアイコンの高さと連動する必要あり */}
        <div>
          {/* 文章 */}
          <div className='text-h flex flex-col justify-center py-[5vw] text-center md:flex-row'>
            <p>フードロス・もったいないが、</p>
            <p>ありがとうになりました。</p>
          </div>
          {/* 白地とボタンを含むエリア */}
          <div className='relative pb-[24px] md:pb-[32px]'>
            {/* 白地のエリア */}
            <div className='ml-[8%] overflow-hidden rounded-l-common border-[2px] border-mywhite bg-mywhite bg-smile  bg-[length:15vw_15vw] bg-[right_1rem_bottom_1rem] bg-no-repeat md:border-[4px]'>
              <div className='translate-x-[-5vw]'>
                <PhotoGallary posts={posts} minSize='medium' />
              </div>
              {/* 白地の左余白をここで吸収してセンター寄せに戻す */}
              <div className='md:mr-[8%]'>
                <h2 className='text-hb my-[2.75vw]'>これまでのおたより</h2>
                <div className='mb-[60px] px-[32px] text-left md:text-center'>
                  <p className='mt-8'>みなさまから届いた大切なお便りを、月ごとにまとめています。</p>
                  <p>ぜひ、あなたあてのおたよりを見つけてみてください。</p>
                </div>
              </div>
            </div>
            {/* 下部にかかるボタン */}
            <div className='absolute bottom-0 z-10 flex w-full justify-center'>
              <LinkButtonWhite
                label='月ごとのおたよりを見る'
                onClick={() => router.push(`/monthly-posts/latest`)}
              />
            </div>
          </div>
          {/* 花のアイコンの高さを確保する */}
          <div className='h-[10vw] min-h-[100px]' />
        </div>
        {/* 花のアイコンたち */}
        <div className='absolute left-[10vw] bottom-[-3.5vw] z-10 aspect-[3/4] w-[12vw] max-w-[290px] rotate-[-5deg]'>
          <Image src='illust_heartflower_l.svg' width='290' height='0' alt='' className=' ' />
        </div>
        <div className='absolute right-[25vw] bottom-[-1vw] z-10 aspect-[3/4] w-[5vw] max-w-[80px] rotate-[-5deg]'>
          <Image src='illust_heartflower_l.svg' width='290' height='0' alt='' className=' ' />
        </div>
        <div className='absolute right-[15vw] bottom-[-1.5vw] z-10 aspect-[3/4] w-[8vw] max-w-[110px] rotate-[5deg]'>
          <Image src='illust_heartflower_r.svg' width='290' height='0' alt='' className=' ' />
        </div>
      </div>

      {/* このサイトについてイントロ */}
      <div className='relative pb-[24px] md:pb-[32px]'>
        <div className='overflow-hidden rounded-b-common bg-myyellow text-center md:pb-[50px]'>
          <div className='relative mx-auto w-fit pt-[5vw]'>
            <h2 className='text-hb relative z-20 px-[16px] align-text-bottom'>
              このサイトについて
            </h2>
            <div className='absolute bottom-0 z-10 h-[0.75em] w-full rounded-full bg-mywhite' />
          </div>

          <AboutIntroduction />
        </div>
        <div className='absolute bottom-0 z-10 flex w-full justify-center'>
          <LinkButtonYellow label='いきさつの物語を読む' onClick={() => router.push('/about')} />
        </div>
      </div>

      {/* 写真ギャラリー単体 */}
      <div className='overflow-hidden py-[40px] md:py-[80px]'>
        <div className='translate-x-[-5vw] bg-mywhite py-[2px] md:py-[4px]'>
          <PhotoGallary posts={posts} minSize='small' />
        </div>
      </div>
    </>
  )
}

export default HomePage

export const getStaticProps: GetStaticProps = async () => {
  let posts = await GetApprovedPosts()

  return {
    props: {
      posts,
    },
  }
}
