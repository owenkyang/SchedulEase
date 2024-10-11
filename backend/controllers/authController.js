import mongoose from "mongoose";
import User from "../models/users.js";
import jwt from 'jsonwebtoken';



const login = async (req, res) => {
    const createUser = await User.create(req.body)
    const token = sign({id: createUser.id, username: createUser.username}, process.env.JWT_SECRET, {expiresIn: '30d'})
}
export default login;