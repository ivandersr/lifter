import SubscriptionsRepository from "../infra/typeorm/repositories/SubscriptionsRepository";

class DeleteSubscriptionService {
  private subscriptionsRepository = new SubscriptionsRepository();

  public async execute(id: string): Promise<void> {
    await this.subscriptionsRepository.delete(id);
  }
}

export default DeleteSubscriptionService;
