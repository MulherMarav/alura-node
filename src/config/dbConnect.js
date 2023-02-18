import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dyaneaaraujo:senha123senha@cluster-alura.x41i2fa.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;