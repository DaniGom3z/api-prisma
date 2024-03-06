import express from "express";
import limiter from "../middleware/limiter.js";
import User  from "../controllers/user.controller.js";

const usuarioRoute = express.Router();

usuarioRoute.get("/users", limiter, User.getUsers);
usuarioRoute.post("/users", User.createUser);

export default usuarioRoute;
