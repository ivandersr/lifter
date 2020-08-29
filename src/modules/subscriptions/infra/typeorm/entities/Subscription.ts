import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subscriptions')
class Subscription {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  value: number;
}

export default Subscription;
