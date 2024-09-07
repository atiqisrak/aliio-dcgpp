// tests/api/generateContent.test.ts
import handler from '../../pages/api/generateContent';
import { createMockRequestResponse } from '../test-utils';

describe('API Route: /api/generateContent', () => {
  it('returns generated content', async () => {
    const { req, res } = createMockRequestResponse({
      method: 'POST',
      body: { prompt: 'Tell me a joke' },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toHaveProperty('generatedContent');
  });

  it('returns 400 for invalid input', async () => {
    const { req, res } = createMockRequestResponse({
      method: 'POST',
      body: { prompt: 123 }, // Invalid prompt type
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(400);
    expect(res._getData()).toHaveProperty('error', 'Invalid prompt provided.');
  });
});
