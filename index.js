import { configDotenv } from "dotenv";
configDotenv()
import { app } from "./src/app.js";

if(!process.env.GMAIL_USER || !process.env.GMAIL_PASS){
    console.log('no env detectead')
    process.exit(1)
}


app.listen(3000,()=>{
    console.log("server is running");
    
})