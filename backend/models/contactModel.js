import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    services: { type: String, enum: ["Engineering Services","Product Development","Technical Consulting"], required: true },
    msg: { type: String }
},{timestamps: true})

export const Contact = mongoose.model('Contact',contactSchema)
