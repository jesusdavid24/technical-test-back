import { Router } from 'express';
import { checkSchema } from 'express-validator';

import {
  createUserHandler,
  getAllUserHandler
} from './user.controller';


const router = Router();

router.post('/', createUserHandler);
router.get('/',getAllUserHandler);


export default router;
