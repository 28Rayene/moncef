const express=require('express')
const router=express.Router()
//post
router.post('/add',async(req,res)=>{
    const{name,email,phone}=req.body
    try{
        const newContact=new contact({
            name,
            email,
            phone
        })
        const contact = await newContact.save()
        res.send({msg:'Contact added'})
    }
    catch(error){
        console.log(error)

    }
})
module.exports=router