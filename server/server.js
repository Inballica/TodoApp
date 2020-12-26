const express = require("express");
const path = require("path");
const app = express();


const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json({ extended: true }));
app.use("/api/todo", require("./routes/todo"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("../client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Your Server is runing on ${PORT} post `);
});
