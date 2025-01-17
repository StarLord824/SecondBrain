import {Router} from "express"
import {z} from "zod"

const adminRouter: Router= Router();

interface user{
    name: z.ZodString
}

adminRouter.post("/signup" , (req,res)=>{
    const {
        name:
    }
});

adminRouter.post("/signin" , (req,res)=>{
    
});

adminRouter.post("/content" , (req,res)=>{

});

adminRouter.get("/content" , (req,res)=>{
    
});

export default adminRouter