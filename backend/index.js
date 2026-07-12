require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;
const dbUrl = process.env.MONGO_URL;
const app = express();
const authRoutes = require("./routes/authRoutes");
const tradeRoutes = require("./routes/tradeRoutes");

const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionModel } = require("./models/PositionModel");
const { OrdersModel } = require("./models/OrdersModel");
const { WalletModel } = require("./models/WalletModel");

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api", tradeRoutes);

main().then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect(dbUrl);
};



// app.get("/allHoldings", async (req, res) => {
//     let allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//     let allPositions = await PositionModel.find({});
//     res.json(allPositions);
// });


// app.get("/allOrders", async (req, res) => {
//   try {
//     const orders = await OrdersModel.find({}).sort({ _id: -1 });
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });

app.listen(PORT, () => {
    console.log("app is running on port 3002");
});


// app.post("/buy", async (req, res) => {
//   try {
//     const name = req.body.name;
//     const qty = Number(req.body.qty);
//     const price = Number(req.body.price);
//     const mode = req.body.mode;

//     const wallet = await WalletModel.findOne({
//       userId: req.user._id,
//     });

//     if (!wallet) {
//       return res.status(404).json({
//         message: "Wallet not found",
//       });
//     }

//     const totalAmount = qty * price;

//     if (wallet.balance < totalAmount) {
//       return res.status(400).json({
//         message: "Insufficient Balance",
//       });
//     }

//     wallet.balance -= totalAmount;
//     await wallet.save();

//     const holding = await HoldingsModel.findOne({ name });

//     if (holding) {
//       const newQty = holding.qty + qty;

//       const newAvg =
//         ((holding.qty * holding.avg) + (qty * price)) / newQty;

//       holding.qty = newQty;
//       holding.avg = newAvg;
//       holding.price = price;

//       await holding.save();

//     } else {

//       const newHolding = new HoldingsModel({
//         name,
//         qty,
//         avg: price,
//         price,
//         net: "0%",
//         day: "0%",
//       });

//       await newHolding.save();
//     }

//     const order = new OrdersModel({
//       name,
//       qty,
//       price,
//       mode: "BUY",
//     });

//     await order.save();

//     res.status(201).json({
//       message: "Stock Bought Successfully",
//       balance: wallet.balance,
//     });

//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });


// app.post("/sell", async (req, res) => {
//   try {

//     const name = req.body.name;
//     const qty = Number(req.body.qty);
//     const price = Number(req.body.price);
//     const mode = req.body.mode;

//     const wallet = await WalletModel.findOne({
//       userId: "demo-user",
//     });

//     if (!wallet) {
//       return res.status(404).json({
//         message: "Wallet not found",
//       });
//     }

//     const holding = await HoldingsModel.findOne({ name });

//     if (!holding) {
//       return res.status(400).json({
//         message: "Stock not found in holdings",
//       });
//     }

//     if (holding.qty < qty) {
//       return res.status(400).json({
//         message: "Not enough quantity available",
//       });
//     }

//     holding.qty -= qty;

//     if (holding.qty === 0) {
//       await HoldingsModel.deleteOne({ name });
//     } else {
//       await holding.save();
//     }

//     const totalAmount = qty * price;

//     wallet.balance += totalAmount;

//     await wallet.save();

//     const order = new OrdersModel({
//       name,
//       qty,
//       price,
//       mode: "SELL",
//     });

//     await order.save();

//     res.status(201).json({
//       message: "Stock Sold Successfully",
//       balance: wallet.balance,
//     });

//   } catch (err) {
//     res.status(500).json({
//       message: err.message,
//     });
//   }
// });

// app.post("/newOrder", async (req, res) => {
//     try {
//         const name = req.body.name;
//         const qty = Number(req.body.qty);
//         const price = Number(req.body.price);
//         const mode = req.body.mode;


//         const wallet = await WalletModel.findOne({
//             userId: "demo-user",
//         });

//         console.log("Wallet Balance:", wallet.balance);
//         console.log("Qty:", qty);
//         console.log("Price:", price);

//         const totalAmount = qty * price;

//         console.log("Total Amount:", totalAmount);

//         if (!wallet) {
//             return res.status(404).json({
//                 message: "Wallet not found",
//             });
//         }



//         if (mode === "BUY") {

//             // Check balance
//             if (wallet.balance < totalAmount) {
//                 return res.status(400).json({
//                     message: "Insufficient Balance",
//                 });
//             }

//             // Deduct balance
//             wallet.balance -= totalAmount;
//             await wallet.save();

//             // Check if holding already exists
//             const holding = await HoldingsModel.findOne({ name });
//             console.log(typeof qty);
//             console.log(typeof holding.qty);
//             if (holding) {

//                 const newQty = holding.qty + qty;

//                 const newAvg =
//                     ((holding.qty * holding.avg) + (qty * price)) / newQty;

//                 holding.qty = newQty;
//                 holding.avg = newAvg;

//                 // Current market price
//                 holding.price = price;

//                 await holding.save();

//             } else {

//                 const newHolding = new HoldingsModel({
//                     name,
//                     qty,
//                     avg: price,
//                     price,
//                     net: "0%",
//                     day: "0%",
//                 });

//                 await newHolding.save();
//             }

//         }

//         const newOrder = new OrdersModel({
//             name,
//             qty,
//             price,
//             mode,
//         });

//         await newOrder.save();

//         res.status(201).json({
//             message: "Order Placed Successfully",
//             balance: wallet.balance,
//         });

//     } catch (err) {
//         res.status(500).json({
//             message: err.message,
//         });
//     }
// });

// app.get("/wallet", async (req, res) => {
//     try {
//         const wallet =await WalletModel.findOne({ userId }).populate("userId");

//         res.status(200).json(wallet);
//     } catch (err) {
//         res.status(500).json({
//             message: "Error fetching wallet",
//             error: err.message,
//         });
//     }
// });






// app.get("/addHoldings", async (req, res) => {
//     let tempHoldings = [
//         {
//             name: "BHARTIARTL",
//             qty: 2,
//             avg: 538.05,
//             price: 541.15,
//             net: "+0.58%",
//             day: "+2.99%",
//         },
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     tempHoldings.forEach((item) => {
//         let newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day
//         });
//         newHolding.save();

//     });
//     res.send("Holdings Added Successfully");

// });

// app.get("/addPositions", async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];


//     tempPositions.forEach((item) => {
//         let newPosition = new PositionModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     });
//     res.send("Positions Added Successfully");
// });

// app.get("/addWallet", async (req, res) => {
//     let newWallet = new WalletModel({
//          userId: "demo-user",
//          balance: 100000,
//     })
//     await newWallet.save();
//     res.send("Wallet Added Successfully");
// });
