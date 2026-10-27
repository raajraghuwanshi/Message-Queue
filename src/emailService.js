import { configDotenv } from 'dotenv'
configDotenv()
import nodemailer from 'nodemailer'

console.log( process.env.GMAIL_USER,process.env.GMAIL_PASS,)
if(!process.env.GMAIL_USER || !process.env.GMAIL_PASS){
    console.log('no env detectead')
    process.exit(1)
}
const transporter = nodemailer.createTransport({
    service:"gmail",
    port:465,
    secure:false,
     auth:{
        user:process.env.GMAIL_USER,
        pass:process.env.GMAIL_PASS,
    }
}) 

export const sendMail = async(to,subject,html)=>{
   try {
    console.log(to,subject,html)
    let info = {
        to,
        subject,
        html
    }


    return await transporter.sendMail(info)
   } catch (error) {
    console.log("error", error)
   }
}