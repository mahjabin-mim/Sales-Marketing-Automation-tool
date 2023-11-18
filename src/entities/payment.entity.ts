import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { PaymentPlan } from './paymentPlan.entity';
import { User } from './user.entity';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  paymentId: number;

  @Column({ nullable: false })
  email: string

  @Column({ nullable: false })
  paymentPlan: string; // 'basic', 'ultra', 'premium'

  @Column({ type: 'date', nullable: false  })
  paymentDate: Date; 

  @ManyToOne(() => PaymentPlan, { onDelete: 'CASCADE' }) 
  @JoinColumn({ name: 'paymentPlan', referencedColumnName: 'paymentPlan' })
  PaymentPlan: PaymentPlan;

  @ManyToOne(() => User, { onDelete: 'CASCADE' }) // if parent is deleted, chile will also deleted
  @JoinColumn({ name: 'email', referencedColumnName: 'email' })
  User: User;
}
