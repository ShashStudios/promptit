// pages/api/auth/session.js
import { getSession } from 'next-auth/react';

export default async (req, res) => {
    try {
        const session = await getSession({ req });
        console.log('Session API response:', session);  // Log the session response
        res.status(200).json(session);
    } catch (error) {
        console.error('Session API error:', error);  // Log any error that occurs
        res.status(500).json({ error: 'Internal Server Error' });
    }
};