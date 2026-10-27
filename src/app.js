import express from 'express'
import { addToQueue } from './queue.js'


export const app = express()



app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.post('/create',async(req,res)=>{
   let {email} = req.body
    console.log(req.body)
       let job =  addToQueue(email)
       console.log(job)
       res.send("added to queue")
})

