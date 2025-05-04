import express from 'express'
import { router } from './route.js'

const app = express()
const port = 3000

let apiCount = 0, useApiCount = 0;

app.use((req, res, next) => {
  console.log("call a api " + ++apiCount);
  next();
});

app.use(router, (req, res, next) => {
  console.log("call a api in user router "+ ++useApiCount)
  next()
})

app.use(express.json())

app.use('/user', router)

app.get('/', (req, res) => {
  res.send('Hello World')
}
)

app.listen(port, () => {
  console.log(`Server is start on http://localhost:${port}`)
})
