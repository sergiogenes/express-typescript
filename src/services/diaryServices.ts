import { DiaryEntry, NonSensitiveInfoDairyEntry } from '../../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => {
  return diaries
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDairyEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
      id, date, weather, visibility
    }))
  }

export const addEntry = (): undefined => undefined
