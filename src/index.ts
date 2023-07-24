import express from 'express'
import diaryRouter from './routes/diaries'

const PORT = 3000

const app = express()

app.use(express.json()) // parsea req.body a un json

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!!')
  res.send('pong')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`)
})
