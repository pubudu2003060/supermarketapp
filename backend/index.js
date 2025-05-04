import express from 'express'
import { router } from './route.js'

const app = express()
const port = 3000

let apiCount = 0, useApiCount = 0;

app.use((req, res, next) => {
  console.log("call a api " + ++apiCount);
  next();
});

app.use('/user', (req, res, next) => {
  console.log("call a api in user router " + ++useApiCount)
  next()
}, router)

app.use(express.json())

app.use('/user', router)

app.use((err, req, res, next) => {
  console.log("error middleware")
  console.log(err)
  res.status(500).json({
    message: "error in server",
    error: err.message
  })
})

app.use('/images', express.static('images'))

app.listen(port, () => {
  console.log(`Server is start on http://localhost:${port}`)
})
