import SubscriptionsRepository from '../infra/typeorm/repositories/SubscriptionsRepository';

import ICreateSubscriptionDTO from '../dtos/ICreateSubscriptionDTO';
import Subscription from '../infra/typeorm/entities/Subscription';

class ListSubscriptionsService {
  private subscriptionsRepository = new SubscriptionsRepository();

  public async execute(): Promise<Subscription[]> {
    const subscriptions = await this.subscriptionsRepository.findAll();

    return subscriptions;
  }
}

export default ListSubscriptionsService;
