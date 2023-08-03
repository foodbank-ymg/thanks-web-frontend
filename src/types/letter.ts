export type ILetter = {
  id: string
  title: string
  description: string
  thumbnail: string
  date: string
  tags: string[]
  isRecommended?: boolean
  paragraphs: LetterParagraph[]
}
export type LetterParagraph = {
  type: 'text' | 'blockquote' | 'list' | 'image' | 'link'
  // for 'text'
  text?: string
  isBold?: boolean
  // for 'blockquote'
  author?: string
  // for 'list'
  items?: string[]
  isItalic?: boolean
  // for 'image'
  image?: LetterImage
  // for 'link'
  url?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export type LetterImage = {
  src: string
  width: number
  height: number
  caption?: string
  alt?: string
}
