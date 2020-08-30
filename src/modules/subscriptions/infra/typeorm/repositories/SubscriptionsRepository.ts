import { getRepository, Repository } from 'typeorm';
import ISubscriptionsRepository from "@modules/subscriptions/repositories/ISubscriptionsRepository";
import ICreateSubscriptionDTO from "@modules/subscriptions/dtos/ICreateSubscriptionDTO";
import Subscription from "../entities/Subscription";
import IUpdateSubscriptionDTO from '@modules/subscriptions/dtos/IUpdateSubscriptionDTO';

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

  public async findAll(): Promise<Subscription[]> {
    const subscriptions = await this.ormRepository.find();

    return subscriptions;
  }

  public async findById(id: string): Promise<Subscription | undefined> {
    const subscription = await this.ormRepository.findOne(id);

    return subscription;
  }

  public async findByTitle(title: string): Promise<Subscription | undefined> {
    const subscription = await this.ormRepository.findOne({ where: { title } });

    return subscription;
  }

  public async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(subscription: Subscription): Promise<Subscription> {
    return this.ormRepository.save(subscription);
  }
}

export default SubscriptionsRepository;
