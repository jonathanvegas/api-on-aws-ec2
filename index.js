import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => res.send('my api ♠︎'))

const PORT = 4400
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})