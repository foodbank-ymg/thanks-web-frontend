import { Post } from '@/types/Post'

export const samplePosts: Post[] = Array.from({ length: 25 }).map((_, i) => {
  return {
    id: `rg-0001-23${(10 - Math.floor(i / 10)).toString().padStart(2, '0')}${(31 - ((i * 3) % 30))
      .toString()
      .padStart(2, '0')}-1100${i}`,
    recipientGroupName: 'XX食堂',
    subject: 'いただいたカレーのルーで炊き出しをしました',
    body: 'あいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこあいうえおかきくけこ',
    images: ['/img/post-sample.webp'],
    createdAt: `2023.${10 - Math.floor(i / 10)}.${31 - ((i * 3) % 30)}`,
  }
})
