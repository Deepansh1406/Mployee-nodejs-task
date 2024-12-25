import Express from "express";
import jobController from "./controller";

export default Express.Router()
.get("/findJobList",jobController.findJobList)
