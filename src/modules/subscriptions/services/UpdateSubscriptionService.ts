import AppError from '@shared/errors/AppError';
import SubscriptionsRepository from '../infra/typeorm/repositories/SubscriptionsRepository';
import IUpdateSubscriptionDTO from '../dtos/IUpdateSubscriptionDTO';
import Subscription from '../infra/typeorm/entities/Subscription';

class UpdateSubscriptionService {
  private subscriptionsRepository = new SubscriptionsRepository();

  public async execute({
    id,
    title,
    value,
  }: IUpdateSubscriptionDTO): Promise<Subscription> {
    const subscription = await this.subscriptionsRepository.findById(id);

    if (!subscription) {
      throw new AppError('Subscription not found', 404);
    }

    if (title) {
      subscription.title = title;
    }

    if (value) {
      subscription.value = value;
    }

    await this.subscriptionsRepository.save(subscription);

    return subscription;
  }
}

export default UpdateSubscriptionService;
