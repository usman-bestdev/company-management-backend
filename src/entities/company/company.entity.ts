import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ServiceFee } from '../service-fee/service-fee.entity'; 

export enum CompanyStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
}

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'enum',
    enum: CompanyStatus,
    default: CompanyStatus.PENDING,
  })
  status: CompanyStatus;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  lastActivity: Date;

  @OneToMany(() => ServiceFee, (serviceFee) => serviceFee.company)
  serviceFees: ServiceFee[]; // A company can have multiple service fees

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date; // Automatically set on insert

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date; // Automatically updated on every update
}
