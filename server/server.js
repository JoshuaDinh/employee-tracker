const express = require("express");

const app = express();
app.use(express.json({ extended: false }));
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.status(200).json({ msg: "you are connected" });
});

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));
