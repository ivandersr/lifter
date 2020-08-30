import { Router } from 'express';
import SubscriptionsRepository from '../../typeorm/repositories/SubscriptionsRepository';

import ListSubscriptionsService from '@modules/subscriptions/services/ListSubscriptionsService';
import DeleteSubscriptionService from '@modules/subscriptions/services/DeleteSubscriptionService';

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', async (request, response) => {
  const listSubscriptions = new ListSubscriptionsService();

  const subscriptions = await listSubscriptions.execute();

  return response.json(subscriptions);
});

subscriptionsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;

  const subscriptionsRepository = new SubscriptionsRepository();

  const subscription = await subscriptionsRepository.create({
    title,
    value,
  });

  return response.json(subscription);
});

subscriptionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteSubscription = new DeleteSubscriptionService();

  await deleteSubscription.execute(id);

  return response.status(204).send();
});

subscriptionsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, value } = request.body;

  return response.status(200).json();
})

export default subscriptionsRouter;
