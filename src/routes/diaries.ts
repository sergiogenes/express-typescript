import express from 'express'
import toNewDairyEntry from '../utils'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const dairy = diaryServices.findById(+req.params.id)

  return (dairy !== null) ? res.send(dairy) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDairyEntry(req.body)

    const addedDiaryEntry = diaryServices.addDairy(newDiaryEntry)

    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default router
