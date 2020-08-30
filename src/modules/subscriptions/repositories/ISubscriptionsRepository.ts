import Subscription from '../infra/typeorm/entities/Subscription';
import ICreateSubscriptionDTO from '../dtos/ICreateSubscriptionDTO';

export default interface ISubscriptionsRepository {
  create(data: ICreateSubscriptionDTO): Promise<Subscription>;
  findAll(): Promise<Subscription[]>;
  findById(id: string): Promise<Subscription | undefined>;
  findByTitle(title: string): Promise<Subscription | undefined>;
  delete(id: string): Promise<void>;
  save(subscription: Subscription): Promise<Subscription>;
}
