import {Queue} from "bullmq"



export let connection =  {
    host:"localhost",
    port:6379
} 

export let queue = new Queue('emails',{connection})


export const addToQueue = function(val){
   let job =  queue.add('send-email',{val},{
        attempts:2,
        backoff:{
            type:"exponential",
            delay:1000
        }
    })
    return job
}