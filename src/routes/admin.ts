import {Router} from "express"
import {z} from "zod"
import jwt from "jsonwebtoken"
import mongoose from "mongoose"
import { UserModel, ContentModel } from "../model";
import { JSON_pwd } from "../index";
import { adminAuth } from "../middlewares/admin";

const adminRouter: Router= Router();

let user= z.object({
    name: z.string().min(3).max(10),
    password: z.string().min(8).regex(/[a-z]/).regex(/[A-Z]/).regex(/[0-9]/).regex(/[\W_]/).max(20)
})

adminRouter.post("/signup" , async (req,res)=>{
    let {name, password}=req.body;
    const token= jwt.sign(JSON_pwd, password);

    try{
        await UserModel.create({
            username: name,
            token
        })
        res.json({
            token
        })
    } 
    catch(e){
        res.json({
            msg: "user already exists"
        })
    };
});
    

adminRouter.post("/signin", async (req,res)=>{
    let {name, password}=req.body;
    const token= jwt.sign(JSON_pwd, password);

    try{
        await UserModel.findOne({
            username: name,
            token
        })
        res.json({
            token
        })
    } 
    catch(e){
        res.json({
            msg: "user not found"
        })
    }
})

adminRouter.post("/content", adminAuth , async (req,res)=>{
    let {username, token}= req.body;
    
    try{
        const creatorId= await UserModel.findOne({
            username,
            token
        }).select("_id")

        const content= {
            title: req.body.title,
            content: req.body.content,
            link: req.body.link,
            creatorId
        }
        await ContentModel.create({
            username: req.body.username
        })

        res.json(content)
    }
    catch(e){
        res.json({
            msg: "user not found"
        })
    }
});

adminRouter.get("/content" , adminAuth , async (req,res)=>{
    let {username, token}= req.body;
    
    try{
        await UserModel.findOne({
            username,
            token
        })
        const content= await ContentModel.find({
            username: req.body.username
        })
        res.json(content)
    }
    catch(e){
        res.json({
            msg: "user not found"
        })
    }
});

export default adminRouter