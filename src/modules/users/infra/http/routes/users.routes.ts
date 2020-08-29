// src/modules/users/infra/http/routes/users.routes.ts
import { Router } from 'express';

import UsersController from '../controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController

usersRouter.get('/', (request, response) =>{
  return response.json({
    message: 'Users route',
  })}
);

usersRouter.post('/', usersController.create)

export default usersRouter;
