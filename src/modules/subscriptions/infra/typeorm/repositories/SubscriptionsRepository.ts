import { getRepository, Repository } from 'typeorm';
import ISubscriptionsRepository from "@modules/subscriptions/repositories/ISubscriptionsRepository";
import ICreateSubscriptionDTO from "@modules/subscriptions/dtos/ICreateSubscriptionDTO";
import Subscription from "../entities/Subscription";

class SubscriptionsRepository implements ISubscriptionsRepository {
  private ormRepository: Repository<Subscription>;

  constructor() {
    this.ormRepository = getRepository(Subscription);
  }
  public async create({ title, value }: ICreateSubscriptionDTO): Promise<Subscription> {
    const subscription = this.ormRepository.create({ title, value });

    await this.ormRepository.save(subscription);

    return subscription;
  }
}

export default SubscriptionsRepository;
