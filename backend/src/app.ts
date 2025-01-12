import express from 'express'
import type { Application, Request, Response } from 'express'
import { UserType, variable1 } from '../../common/utils'

const app: Application = express()

const port = 3001

const user1: UserType = {
  name: "sahil",
  age: 10,
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from express + typescript (test2): <br />' + variable1 + "<br /> Hello, " + user1.name + ` (${user1.age})`)
})

app.listen(port, function () {
  console.log(`App is listening on port ${port}`)
})
