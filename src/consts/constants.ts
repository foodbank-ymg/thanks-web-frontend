export const messageStatus = {
  INPUT_IMAGE: '画像添付',
  CONFIRM_IMAGE: '画像確認',
  INPUT_POSITION: '立場入力',
  CONFIRM_POSITION: '立場確認',
  CONFIRM_SUBMIT: '確認待ち',
  APPROVED: '承認済み',
  CANCELED: 'キャンセル済み',
}

export type messageStatusType = (typeof messageStatus)[keyof typeof messageStatus]
