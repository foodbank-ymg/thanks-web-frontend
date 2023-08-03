import { ILetter } from '../src/types/letter'

import { news20190613 } from './2019-06-13'
import { news20191122 } from './2019-11-22'
import { news20191209 } from './2019-12-09'
import { news20200629 } from './2020-06-29'
import { news20201205 } from './2020-12-05'
import { news20210313 } from './2021-03-13'
import { news20210622 } from './2021-06-22'
import { news20210729 } from './2021-07-29'
import { news20210730 } from './2021-07-30'
import { news20211007 } from './2021-10-07'
import { news20211029 } from './2021-10-29'
import { news20211211 } from './2021-12-11'
import { news20220302 } from './2022-03-02'
import { news20220330 } from './2022-03-30'
import { news20220415 } from './2022-04-15'
import { news20220719 } from './2022-07-19'
import { news20221008 } from './2022-10-08'
import { news20221104 } from './2022-11-04'
import { news20230206 } from './2023-02-06'
import { news20230313 } from './2023-03-13'
import { news20230318 } from './2023-03-18'
import { news20230407 } from './2023-04-07'

export const getNewsAll = (): ILetter[] => {
  return [
    news20230407,
    news20230318,
    news20230313,
    news20230206,
    news20221104,
    news20221008,
    news20220719,
    news20220415,
    news20220330,
    news20220302,
    news20211211,
    news20211029,
    news20211007,
    news20210730,
    news20210729,
    news20210622,
    news20210313,
    news20201205,
    news20200629,
    news20191209,
    news20191122,
    news20190613,
  ]
}

export const getNews = (id: string): ILetter | undefined => {
  return getNewsAll().find((news) => news.id === id)
}
