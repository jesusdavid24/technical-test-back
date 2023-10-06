import { Application } from 'express';
import userRouter from './api/user';
import healthcheckRouter from './api/healthcheck';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/users', userRouter)  
}

export default routes