import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    name: String,
    email: String,
    pwd: String
})

const contentSchema=new mongoose.Schema({
    title: String,
    content: String,
    link: String,
    creatorId: mongoose.Schema.Types.ObjectId
})

export const UserModel= mongoose.model( "User" ,UserSchema)
export const ContentModel= mongoose.model( "Content" ,contentSchema)
