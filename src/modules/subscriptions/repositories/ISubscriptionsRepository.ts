import Subscription from '../infra/typeorm/entities/Subscription';
import ICreateSubscriptionDTO from '../dtos/ICreateSubscriptionDTO';

export default interface ISubscriptionsRepository {
  create(data: ICreateSubscriptionDTO): Promise<Subscription>;
}
