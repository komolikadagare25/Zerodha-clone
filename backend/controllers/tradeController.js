const { WalletModel } = require("../models/WalletModel");
const { OrdersModel } = require("../models/OrdersModel");
const { HoldingsModel } = require("../models/HoldingsModel");

// GET WALLET
const getWallet = async (req, res) => {
  try {
    console.log("===== getWallet =====");
    console.log("req.user =", req.user);
    console.log("req.user.id =", req.user.id);

    const wallet = await WalletModel.findOne({
      userId: req.user.id,
    });

    console.log("wallet =", wallet);

    return res.json(wallet);
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Error fetching wallet",
      error: err.message,
    });
  }
};

// BUY STOCK
const buyStock = async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    const qtyNum = Number(qty);
    const priceNum = Number(price);

    const totalCost = qtyNum * priceNum;

    const wallet = await WalletModel.findOne({
      userId: req.user.id,
    });

    if (!wallet || wallet.balance < totalCost) {
      return res.status(400).json({
        message: "Insufficient balance",
      });
    }

    wallet.balance -= totalCost;
    await wallet.save();

    await OrdersModel.create({
      userId: req.user.id,
      name,
      qty: qtyNum,
      price: priceNum,
      mode: "BUY",
    });

    let holding = await HoldingsModel.findOne({
      userId: req.user.id,
      name,
    });

    if (holding) {
      const newQty = holding.qty + qtyNum;

      holding.avg =
        (holding.avg * holding.qty + priceNum * qtyNum) / newQty;

      holding.qty = newQty;
      holding.price = priceNum;

      await holding.save();
    } else {
      await HoldingsModel.create({
        userId: req.user.id,
        name,
        qty: qtyNum,
        avg: priceNum,
        price: priceNum,
        net: 0,
        day: 0,
      });
    }

    res.json({ message: "Stock bought successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Buy failed" });
  }
};

const sellStock = async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    const qtyNum = Number(qty);
    const priceNum = Number(price);

    const holding = await HoldingsModel.findOne({
      userId: req.user.id,
      name,
    });

    if (!holding) {
      return res.status(400).json({
        message: "Stock not found in holdings",
      });
    }

    if (holding.qty < qtyNum) {
      return res.status(400).json({
        message: "Not enough quantity",
      });
    }

    const totalGain = qtyNum * priceNum;

    const wallet = await WalletModel.findOne({
      userId: req.user.id,
    });

    wallet.balance += totalGain;
    await wallet.save();

    await OrdersModel.create({
      userId: req.user.id,
      name,
      qty: qtyNum,
      price: priceNum,
      mode: "SELL",
    });

    holding.qty -= qtyNum;

    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ _id: holding._id });
    } else {
      holding.price = priceNum;
      await holding.save();
    }

    res.json({ message: "Stock sold successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Sell failed" });
  }
};
// GET ORDERS
const getOrders = async (req, res) => {
  try {
    const orders = await OrdersModel.find({ userId: req.user.id });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Error fetching orders" });
  }
};

const getHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req.user.id,
    });

    res.json(holdings);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching holdings",
    });
  }
};

module.exports = {
  getWallet,
  buyStock,
  sellStock,
  getOrders,
  getHoldings,
};