const express = require("express");
const productRouter = require("./products");
const cartRouter = require("./cart");
const productTestRouter = require("./productTests");
const indexRouter = express.Router();

indexRouter.use("/api/products", productRouter);
indexRouter.use("/api/cart", cartRouter);
indexRouter.use("/api/products-test", productTestRouter);

module.exports = indexRouter;
