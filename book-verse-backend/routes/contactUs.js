const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.post("/", async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();
    res.status(201).json({ feedback: "Message Delivered Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ feedback: error.feedback || "Message Failed" });
  }
});

module.exports = router;
