import type { NextApiRequest, NextApiResponse } from 'next';
import { spawn } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid prompt provided.' });
    }

    // Run Python script to generate content using GPT-J or GPT-NeoX
    const pythonProcess = spawn('python', ['scripts/generate_content.py', prompt]);

    let responseData = '';
    let errorData = '';

    // Capture stdout data
    pythonProcess.stdout.on('data', (data) => {
      responseData += data.toString();
    });

    // Capture stderr data
    pythonProcess.stderr.on('data', (data) => {
      errorData += data.toString();
    });

    // When the process exits, send the response
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        res.status(200).json({ generatedContent: responseData.trim() });
      } else {
        console.error(`Python script exited with code ${code}: ${errorData}`);
        res.status(500).json({ error: 'Failed to generate content', details: errorData });
      }
    });

    // Timeout to prevent stalled requests (e.g., if the Python script hangs)
    setTimeout(() => {
      if (!res.headersSent) {
        res.status(500).json({ error: 'Request timed out' });
        pythonProcess.kill('SIGTERM');
      }
    }, 30000); // 30 seconds timeout

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
