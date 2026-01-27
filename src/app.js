require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const checkRoutes = require("./routes/check.routes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/check", checkRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
