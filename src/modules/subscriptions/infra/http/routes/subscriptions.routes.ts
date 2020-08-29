import { Router } from 'express';
import SubscriptionsRepository from '../../typeorm/repositories/SubscriptionsRepository';

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', (request, response) => {
  return response.json({
    message: "subscriptions route",
  })
});

subscriptionsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;

  const subscriptionsRepository = new SubscriptionsRepository();

  const subscription = await subscriptionsRepository.create({
    title,
    value,
  });

  return response.json(subscription);
})

export default subscriptionsRouter;
