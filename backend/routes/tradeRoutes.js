const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  getWallet,
  buyStock,
  sellStock,
  getOrders,
  getHoldings,
} = require("../controllers/tradeController");

// Wallet
router.get("/wallet", authMiddleware, getWallet);

// Buy stock
router.post("/buy", authMiddleware, buyStock);

// Sell stock
router.post("/sell", authMiddleware, sellStock);

// Orders history
router.get("/orders", authMiddleware, getOrders);

// Holdings
router.get("/holdings", authMiddleware, getHoldings);

module.exports = router;