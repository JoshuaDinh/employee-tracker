const db = require("./config");

const connectDB = async () => {
  try {
    await db.connect();
    console.log("Database Connected");
  } catch (err) {
    console.error(err.message);
    // Exit Process With Failure
    process.exit(1);
  }
};

module.exports = connectDB;
