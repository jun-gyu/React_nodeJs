import connectDB from "./config/db.js";
import User from "./model/User.js";
import express from "express";
const port = 3000;
const app = express();
connectDB();
