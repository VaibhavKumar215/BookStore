import User from "../Model/user_Model.js";
import bcryptjs from 'bcryptjs'

export const signUp=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const user = await User.findOne({email})

        if(user){
            return res.status(400).json({message:"User already exits"})
        }

        const hashPassword = await bcryptjs.hash(password,10)
        const createUser= new User({
            name: name,
            email: email,
            password: hashPassword
        })
        await createUser.save()
        res.status(201).json({message:"Usesr created Successfully",user:{
            _id: createUser._id,
            name: createUser.name,
            email:createUser.email
        }})
    } catch (error) {
        console.log("User Error",error.message)
        res.status(500).json({message:"Internal server error"})
    }
}

export const Login=async (req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid username"})
            // console.log(!!user)
        }

        const isPassword = await bcryptjs.compare(password,user.password)
        if(!isPassword){
            return res.status(400).json({message:"Invalid password"})
            // console.log(!!user)
        }
        else{
            res.status(200).json({message:"Login Successfull",user:{
                _id: user._id,
                name:user.name,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error",error)
        res.status(500).json({message:"Internal server error"})
    }
}