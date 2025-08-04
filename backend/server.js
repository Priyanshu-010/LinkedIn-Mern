import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import userRoutes from './routes/user.route.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: 'https://linked-in-mern-b5tq.vercel.app', // Match your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all necessary methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow required headers
  credentials: true, // Allow credentials if needed
}));

app.options('*', cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
