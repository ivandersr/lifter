// src/routes/index.ts
import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import subscriptionsRouter from '@modules/subscriptions/infra/http/routes/subscriptions.routes';


const routes = Router();

routes.use('/users', usersRouter);
routes.use('/subscriptions', subscriptionsRouter);

routes.get('/', (request, response) => {
  return response.json({
    message: 'Server is running',
  })
})

export default routes;
