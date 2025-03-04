const mongoose = require("mongoose");

const connectDB = async (app) => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTED TO DATABASE SUCCESSFULLY");

    const port = process.env.PORT || 5000;
    // app.listen(port, () => {
    //   console.log(`Server is running on port ${port}`);
    // });
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message);
  }
};

module.exports = connectDB;
