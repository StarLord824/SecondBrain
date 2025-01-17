import express from "express"

import adminRouter from "./routes/admin"
import sharingRouter from "./routes/brain"

const app=express()
export const JSON_pwd= "1234random";

app.use(express.json())

app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/brain", sharingRouter)

app.listen(process.env.PORT || 8000, ()=>{
        console.log("app started on port 8000")
    }
)