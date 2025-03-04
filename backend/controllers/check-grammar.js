const axios = require("axios");


module.exports.checkGrammar = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required." });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: `Fix grammatical errors in this text and return only the corrected version without any additional text or quotes: "${text}"`,
          },
        ],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      let correctedText = response.data.choices[0].message.content;
      correctedText = correctedText.replace(/^"(.*)"$/, "$1");

      res.json({
        originalText: text,
        correctedText: correctedText,
      });
    } else {
      res.status(500).json({ error: "Invalid response from AI" });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process the request." });
  }
};

