require('dotenv').config()
import express from 'express'
import cors from 'cors'

import { WithdrawController } from '../presentation/controllers'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/', (_, res) => {
  res.json({
    working: true,
  })
})

app.post('/withdraw', WithdrawController)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
