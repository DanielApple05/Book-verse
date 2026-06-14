const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        feedback: "All fields are required",
      });
    }
    const newMessage = new Contact({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });
    await newMessage.save();
    res.status(201).json({ feedback: "Message Delivered Successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ feedback: "Something went wrong. Please try again." });
  }
});

module.exports = router;
