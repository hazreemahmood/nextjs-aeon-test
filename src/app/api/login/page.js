import { createHmac } from 'crypto';
import { serialize } from 'cookie';

// Hardcoded users (username and hashed password)
const users = [
  {
    username: 'testuser',
    password: '5f4dcc3b5aa765d61d8327deb882cf99' // md5 hash of "password123"
  }
];

// Simple hashing function for comparison (using md5 here for simplicity)
function hashPassword(password) {
  return createHmac('md5', 'secret') // Use a proper secret in production
    .update(password)
    .digest('hex');
}

export default async function handler(req, res) {
  console.log(req.method);
  return req.method;
  // if (req.method === 'POST') {
  //   const { username, password } = req.body;

  //   // Find the user by username
  //   const user = users.find(user => user.username === username);
    
  //   if (!user) {
  //     return res.status(401).json({ error: 'Invalid username or password' });
  //   }

  //   // Check if the password hash matches
  //   const hashedPassword = hashPassword(password);
  //   if (hashedPassword !== user.password) {
  //     return res.status(401).json({ error: 'Invalid username or password' });
  //   }

  //   // Simple "session" using a cookie (you could also use a token here)
  //   res.setHeader('Set-Cookie', serialize('token', 'fake-session-id', { 
  //     httpOnly: true, 
  //     secure: process.env.NODE_ENV === 'production', 
  //     maxAge: 3600, // 1 hour
  //     path: '/',
  //   }));

  //   return res.status(200).json({ message: 'Login successful' });
  // }

  // return res.status(405).json({ error: 'Method Not Allowed' });
}
