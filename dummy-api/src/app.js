const express = require('express')

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()
const port = 3000

app.use(express.json())

app.get('/',async (req, res) => {
  res.send(await prisma.user.findMany())
})

app.post('/create', async (req, res) => {
    const user = await prisma.user.create({
      data: req.body
    })

    res.json(user)
  })

app.listen(port | 3000, () => {
  console.log(`Application start on port: ${port}`)
})