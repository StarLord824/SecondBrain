import express from "express";
import { UserModel } from "../model";

export const adminAuth: express.RequestHandler= (req,res,next)=>{
    try{
        UserModel.findOne(req.body.token)
        next()
    }
    catch(e){
        res.json({
            msg: "you are not admin"
        })
    }
}