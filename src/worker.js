import {Worker} from "bullmq"
import { connection } from "./queue.js"
import { sendMail } from "./emailService.js"

console.log("worker up")

let worker = new Worker(
    "emails",
    async function(job) {
        console.log("this is worker doing the job",job.id,job.data.val)
        let res = await sendMail(job.data.val,"Welcome Mail",`Welcome to the app, this is mail number ${job.id}`)
        console.log("res",res)
        await new Promise((resolve)=> setTimeout(resolve,500))
        console.log("work done ")
    },
    {connection}
)

worker.on("completed",()=>{
    console.log("work done")
})
worker.on("error",(error)=>{
    console.log(error)
})
