import AppError from '@shared/errors/AppError';
import ICreateSubscriptionDTO from '../dtos/ICreateSubscriptionDTO';
import Subscription from '../infra/typeorm/entities/Subscription';
import SubscriptionsRepository from '../infra/typeorm/repositories/SubscriptionsRepository';

class CreateSubscriptionService {
  private subscriptionsRepository = new SubscriptionsRepository();

  public async execute({
    title,
    value,
  }: ICreateSubscriptionDTO): Promise<Subscription> {
    const existingSubscription = await this.subscriptionsRepository.findByTitle(
      title,
    );

    if (existingSubscription) {
      throw new AppError('This title is already in use', 400);
    }

    const subscription = await this.subscriptionsRepository.create({
      title,
      value,
    });

    await this.subscriptionsRepository.save(subscription);

    return subscription;
  }
}

export default CreateSubscriptionService;
