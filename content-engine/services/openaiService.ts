import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Make sure your environment variable is set correctly
});

export const generateContent = async (prompt: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // or another GPT model
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200, // Adjust based on your needs
    });

    return response.choices[0].message?.content || '';
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
};
