import userModel from '../models/userModel.js';
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

const securitykey=process.env.JWT_SECRET;

export const registerController = async (req,res) =>{
    try
    {
        const{name,email,phone,password,answer}=req.body;
        //validation
        if(!name)
        {
            return res.send({error:"name is required"});
        }
        if(!email)
        {
            return res.send({message:"email is required"});
        }
        if(!phone)
        {
            return res.send({message:"phone is required"});
        }
        if(!password)
        {
            return res.send({message:"password is required"});
        }
        if(!answer)
        {
            return res.send({message:"answer is required"});
        }
        //check user
        const existingUser = await userModel.findOne({email});
        //existing user
        if(existingUser)
        {
            return res.status(200).send({
                success:false,
                message: "Already Register please login",
            });
        }

        //regsiter user
        const hashedPassword=await hashPassword(password)
        //save
        const user = await new userModel({name,email,phone,answer,password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message:'User registered Successfully',
            user,
        });
    }   
    catch(error)
    {
        console.log(error.message)
        res.status(500).send({
            success:false,
            message:"error in registration",
            error,
        });
    }
};

export const loginController= async (req,res)=>{
    try 
    {
        const {email,password} = req.body;
        //validation
        if (!email || !password) 
        {
          return res.status(404).send({
            success: false,
            message: "Invalid email or password",
          });
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) 
        {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //token
        const token = JWT.sign({ _id: user._id},process.env.JWT_SECRET);
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: 
            {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: user.role,
            },
            token,
        });
    }
    catch (error) {
        console.error("Error in login:", error); // Log the error details
        res.status(500).send({
            success: false,
            message: "Error in login",
            error: error.message, // Send the error message to the client
        });
    }
    
};

export const forgotPasswordController = async (req, res) => {
    try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Email is required" });
      }
      if (!answer) {
        res.status(400).send({ message: "answer is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email Or Answer",
        });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
};


//test controller
export const testController = (req, res) => {
    try 
    {
        res.send("Protected Routes");
    } catch (error) 
    {
        console.log(error);
        res.send({ error });
    }
};
