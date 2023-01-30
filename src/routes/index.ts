import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response, next) => {
  res.render('index', { title: 'Express' });
});

export { router as routerIndex };
