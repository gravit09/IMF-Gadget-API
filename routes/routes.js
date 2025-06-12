import express from "express";
import {
  getAllGadgets,
  createGadget,
  updateGadget,
  deleteGadget,
  getGadgetByStatus,
  selfDestructWithSequenceCode,
} from "../controllers/gadget.controlles.js";
import {
  registerImfMember,
  loginImfMember,
} from "../controllers/auth.controller.js";
import { isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/auth/register", registerImfMember);
router.post("/auth/login", loginImfMember);

router.get("/gadgets", isAuthenticated, getAllGadgets);
router.get("/gadgets/status/:status", isAuthenticated, getGadgetByStatus);
router.post("/gadgets", isAuthenticated, createGadget);
router.patch("/gadgets/:id", isAuthenticated, updateGadget);
router.delete("/gadgets/:id", isAuthenticated, deleteGadget);
router.post(
  "/gadgets/:id/self-destruct",
  isAuthenticated,
  selfDestructWithSequenceCode
);

export default router;
