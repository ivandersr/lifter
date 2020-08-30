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
      throw new AppError('This title is already in use', 400);
    }

    // TODO atualização de informações

    return subscription;
  }
}

export default UpdateSubscriptionService;
