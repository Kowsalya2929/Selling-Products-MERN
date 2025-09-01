import {Contact} from '../models/contactModel.js'
import transporter from '../config/nodemailer.js'

export const postContactForm = async(req,res) => {
    try{
        const {username,email,phone,services,msg} = req.body;
        if(!username || !email || !phone || !services){
            return res.status(400).json({success: false,message: "All fields are required"})
        }
        await transporter.sendMail({
            from: email,
            to: process.env.ADMIN_MAIL,
            subject: `Querys contact form from Cloudi5`,
            text: `You have received a new message from your Cloudi5 contact form.\n\nClient Name: ${username} \nClient Email: ${email}\nServices: ${services}\nClient Message: ${msg}`
        })
        const posted = await Contact.create({username,email,phone,services,msg})
        res.status(200).json({success: true,message: "message sended successfully",data: posted})
    }catch(err){
        console.log(`Post contact error : ${err.message}`)
        res.status(500).json({success: false,message: "Internal Server Error"})
    }
}

