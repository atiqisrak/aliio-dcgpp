import { generateContent } from '../services/openaiService';

jest.mock('openai', () => ({
  Configuration: jest.fn(),
  OpenAIApi: jest.fn().mockImplementation(() => ({
    createCompletion: jest.fn().mockResolvedValue({
      data: { choices: [{ text: 'Generated content' }] },
    }),
  })),
}));

describe('generateContent', () => {
  it('should generate content based on the prompt', async () => {
    const prompt = 'Write a short story about a dragon';
    const result = await generateContent(prompt);
    expect(result).toBe('Generated content');
  });

  it('should handle errors properly', async () => {
    const mockError = new Error('API Error');
    (generateContent as jest.Mock).mockRejectedValueOnce(mockError);
    await expect(generateContent('Test')).rejects.toThrow('API Error');
  });
});
