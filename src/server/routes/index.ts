import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => {
  return res.send('ölá dev');
});

router.post('/teste', (req, res) => {
  console.log(req.cookies);
  return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };
