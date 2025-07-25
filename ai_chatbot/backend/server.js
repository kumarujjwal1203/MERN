const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Serve index.html from backend directory
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// OpenRouter API details
const API_KEY = "AIzaSyCrhoj9bp-xgqIz-wVAXQhiq1GyR2fs44c"; // ✅ Replace with your API key
const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const MODEL = "openai/gpt-4o"; // ✅ Or any other OpenRouter model

// Chat endpoint
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage || userMessage.trim() === "") {
    return res.status(400).json({ error: "Message cannot be empty" });
  }

  try {
    const response = await axios.post(
      API_URL,
      {
        model: MODEL,
        max_tokens: 500, // ✅ Limit response size
        temperature: 0.7, // ✅ Make responses a little creative
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000", // ✅ Required by OpenRouter
          "X-Title": "Ujjwal Chatbot", // ✅ Appears in OpenRouter stats
        },
      }
    );

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });
  } catch (error) {
    console.error("OpenRouter error:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get response from OpenRouter" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
