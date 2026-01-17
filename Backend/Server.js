const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// models
const Contact = require("./model/Users");

// mongodb
// mongoose.connect("mongodb://localhost:27017/project2")
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

mongoose
  .connect(
    "mongodb+srv://customer_contact:infotech_abhishek@cluster0.v8to86d.mongodb.net/project2"
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo Error:", err.message));






// CONTACT API
app.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message, nda } = req.body;

    await Contact.create({
      name,
      email,
      phone,
      message,
      nda
    });

    res.json({
      status: true,
      msg: "Contact form submitted successfully"
    });

  } catch (err) {
    res.json({
      status: false,
      msg: "Failed to submit contact form"
    });
  }
});

app.listen(8080, () => {
  console.log("Server running on port 8080");
});