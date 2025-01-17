import {Router} from "express"
import {z} from "zod"
import mongoose from "mongoose"
import { UserModel } from "../model";

const adminRouter: Router= Router();

let user= z.object({
    name: z.string().min(3).max(10),
    password: z.string().min(8).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/).regex(/[\W_]/).max(20)
})

adminRouter.post("/signup" , (req,res)=>{
    let {name, password}=req.body;

});

adminRouter.post("/signin" , (req,res)=>{
    
});

adminRouter.post("/content" , (req,res)=>{

});

adminRouter.get("/content" , (req,res)=>{
    
});

export default adminRouter