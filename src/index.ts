import express, { Request, Response } from 'express';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hola! aquí primer endpoint' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
