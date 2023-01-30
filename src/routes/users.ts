import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/users', async (req: Request, res: Response, next) => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');

    res.send(users.data);
  } catch (error: any) {
    const { status } = error.response;
    const { statusText } = error.response.statusText;

    res.status(status).send(statusText);
  }
});

export { router as routerUsers };
