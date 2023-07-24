export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'wendy' | 'stormy'

export type Visibility = 'great' | 'good' | 'ok' | 'poor' | 'bad'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}

/* export type NonSensitiveInfoDairyEntry = Pick<
  DiaryEntry,
  'id' | 'date' | 'wheather' | 'visilibility'
> */

export type NonSensitiveInfoDairyEntry = Omit<DiaryEntry, 'comment'>
