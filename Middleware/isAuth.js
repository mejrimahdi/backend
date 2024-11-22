


const jwt=require("jsonwebtoken")
const user = require("../Models/user")




const isAuth = async (req,res,next) =>{
    try {
        const token = req.body.headers.authorization
        
        if(!token) {
            return res.status(400).send({msg:'not authorized!1'})
        }
        const decoded = jwt.verify(token, process.env.SEKRET_KEY)
        const foundUser = await user.findOne({_id: decoded._id})
        if (!foundUser){
           return res.status(400).send({msg:'not authorized!2'})
        }
        req.user=foundUser
        next()
    } catch (error) {
        // res.status(200).send(error)
    }
    }
    
    module.exports = isAuth 