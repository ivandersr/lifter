import { Router } from 'express';

import ListSubscriptionsService from '@modules/subscriptions/services/ListSubscriptionsService';
import DeleteSubscriptionService from '@modules/subscriptions/services/DeleteSubscriptionService';
import UpdateSubscriptionService from '@modules/subscriptions/services/UpdateSubscriptionService';
import CreateSubscriptionService from '@modules/subscriptions/services/CreateSubscriptionService';

const subscriptionsRouter = Router();

subscriptionsRouter.get('/', async (request, response) => {
  const listSubscriptions = new ListSubscriptionsService();

  const subscriptions = await listSubscriptions.execute();

  return response.json(subscriptions);
});

subscriptionsRouter.post('/', async (request, response) => {
  const { title, value } = request.body;

  const createSubscription = new CreateSubscriptionService();

  const subscription = await createSubscription.execute({
    title,
    value,
  });

  return response.status(201).json(subscription);
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

  const updateSubscription = new UpdateSubscriptionService();

  const subscription = await updateSubscription.execute({ id, title, value });

  return response.status(200).json(subscription);
});

export default subscriptionsRouter;
