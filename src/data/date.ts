export const getDateString = (date: Date): string => {
  const year = date.getFullYear()
  const month = ('0' + (1 + date.getMonth())).slice(-2)
  const day = ('0' + date.getDate()).slice(-2)

  return `${year}年${month}月${day}日`
}
