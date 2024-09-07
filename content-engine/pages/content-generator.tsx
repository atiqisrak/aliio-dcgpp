import { useState } from 'react';
import axios from 'axios';

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateContent = async () => {
    setLoading(true);
    try {
      const response = await axios.post('/api/generateContent', { prompt });
      setGeneratedContent(response.data.generatedContent);
    } catch (error) {
      console.error('Error generating content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '24px',
      }}>AI Content Generator</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your content prompt..."
        style={{
            width: '100%',
            height: '100px',
            padding: '10px',
            marginBottom: '20px',
            color: '#333',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '5px',

        }}
      />
      <button onClick={handleGenerateContent} disabled={loading} style={{
        padding: '10px 20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#0070f3',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
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
