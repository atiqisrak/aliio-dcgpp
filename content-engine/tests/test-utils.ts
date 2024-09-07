// tests/test-utils.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestOptions } from 'node-mocks-http';

// Function to create mock Next.js API request and response
export function createMockRequestResponse(options: RequestOptions) {
  const { req, res } = createMocks(options);

  // Add missing properties to match NextApiRequest type
  const mockReq = req as NextApiRequest;
  const mockRes = res as NextApiResponse;

  // Add any other necessary properties to req or res here if needed

  return { req: mockReq, res: mockRes };
}
