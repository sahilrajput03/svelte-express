import express from 'express'
import type { Application, Request, Response } from 'express'
import { variable1 } from '../../common/utils'

const app: Application = express()

const port = 3001

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from express + typescript: <br />' + variable1)
})

app.listen(port, function () {
  console.log(`App is listening on port ${port}`)
})
