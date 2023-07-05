export const postStatus = {
  INPUT_SUBJECT: '主題入力',
  CONFIRM_SUBJECT: '主題確認',
  INPUT_BODY: '本文入力',
  CONFIRM_BODY: '本文確認',
  INPUT_IMAGE: '画像添付',
  CONFIRM_IMAGE: '画像確認',
  CONFIRM_SUBMIT: '送信確認',
  WAITING_REVIEW: '確認待ち',
  APPROVED: '承認済み',
  REJECTED: '却下済み',
}

export type postStatusType = (typeof postStatus)[keyof typeof postStatus]
