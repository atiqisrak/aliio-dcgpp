import { useState } from 'react';
import { generateContent } from '../services/openaiService';

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    try {
      const content = await generateContent(prompt);
      setGeneratedContent(content);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>AI Content Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your content prompt..."
      />
      <button onClick={handleGenerateContent} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Content'}
      </button>
      {generatedContent && (
        <div>
          <h2>Generated Content:</h2>
          <p>{generatedContent}</p>
        </div>
      )}
    </div>
  );
};

export default ContentGenerator;
