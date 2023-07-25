import { DiaryEntry, NewDairyEntry, NonSensitiveInfoDairyEntry } from '../../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDairyEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
      return { id, date, weather, visibility }
    })
  }

export const findById = (id: number): NonSensitiveInfoDairyEntry | undefined => {
  const dairy = diaries.find(d => d.id === id)
  if (dairy != null) {
    const { comment, ...restOfDairy } = dairy
    return restOfDairy
  }
  return undefined
}

export const addDairy = (newDairyEntry: NewDairyEntry): DiaryEntry => {
  const newDairy = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDairyEntry
  }

  diaries.push(newDairy)

  return newDairy
}
