import express from "express";
const router = express.Router({ mergeParams: true });
import walletsControllers from "@/modules/wallets/wallets.controllers";

router.delete("/", walletsControllers.deleteWalletsByUserId);

router.get("/", walletsControllers.getWalletsByUserId);

export default router;
