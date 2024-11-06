import express from 'express';
import { Client } from 'pg';

const app = express();
const port = 3000;

// Database connection setup
const client = new Client({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});

client.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Database connection error', err.stack));

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

