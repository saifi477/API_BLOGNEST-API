const { GoogleGenAI } = require('@google/genai');

const callGemini = async (prompt) => {
  const apiKey = process.env.GEMINI_API_KEY;
  const modelName = process.env.GEMINI_MODEL || 'gemini-3.8-flash';

  if (!apiKey) {
    throw new Error('Gemini API key is not configured');
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });

    const interaction = await ai.interactions.create({
      model: modelName,
      input: prompt,
    });

    const text = interaction.output_text;

    if (!text) {
      throw new Error('Invalid Gemini response');
    }

    return text;
  } catch (error) {
    console.error('Gemini API Error:', error.message);
    throw error;
  }
};

module.exports = {
  callGemini,
};