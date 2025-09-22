const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
import authRouter from './routes/auth'
import chatRouter from './routes/chat'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    {title : 'welcome to silly chat'}
})
app.listen(PORT , ()=>{
    console.log(`silly chat API is running on http://localhost${PORT}`)
})


mongoose.connect(process.env.CHAP_APP_DATABASE_URL)
export default app