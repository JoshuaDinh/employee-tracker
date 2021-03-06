const express = require("express");
const employeeRoute = require("./routes/api/employeeRoute");

const app = express();

const PORT = process.env.PORT || 5000;

// MiddleWare
app.use(express.json({ extended: false }));

// Routes
app.use("/api/employee", employeeRoute);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "you are connected" });
});

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));
