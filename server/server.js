const express = require("express");
const connectDB = require("./db/db");

const addEmployeeRoute = require("./routes/api/addEmployeeRoute");

const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(express.json({ extended: false }));

// Routes
app.use("/api/addEmployee", addEmployeeRoute);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "you are connected" });
});

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));
