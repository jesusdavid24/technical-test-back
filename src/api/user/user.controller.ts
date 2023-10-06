import { Request, Response } from 'express';

import {
  createUser,
  getAllUser,
} from './user.service';
import errorHandler from '../../utils/errorHandler';
import { User } from './user.types';

export async function createUserHandler(req: Request, res: Response) {
  try {
    const data = req.body;

    const user = await createUser(data);

    res.status(201).json(user);
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  try {

    const users = await getAllUser();
    
    return res.status(202).json({ message: 'users has been found successfully', users });
  } catch (exception: unknown) {
    const message = errorHandler(exception);
    res.status(400).send({ message });
  }
}


 