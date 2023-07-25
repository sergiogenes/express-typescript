export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Wendy = 'wendy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor',
  Bad = 'bad'
}

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
export type NewDairyEntry = Omit<DiaryEntry, 'id'>
