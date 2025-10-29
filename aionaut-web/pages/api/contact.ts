import type { NextApiRequest, NextApiResponse } from 'next';

// Mock endpoint for contact form. Replace with real mail/webhook later.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, message: 'Missing fields' });
  }

  // Simulate processing delay
  await new Promise((r) => setTimeout(r, 600));
  return res.status(200).json({ ok: true });
}

