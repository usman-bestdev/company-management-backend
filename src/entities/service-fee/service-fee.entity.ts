import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Company } from '../company/company.entity';  // Import Company for the relationship

export enum AssetType {
  BTC = 'BTC',
  GAS = 'GAS',
}

@Entity()
export class ServiceFee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: AssetType,
    default: AssetType.BTC,  // Default value can be BTC or GAS
  })
  assetType: AssetType;

  @Column({ type: 'float', nullable: false })
  gasPrice: number;

  @Column({ type: 'timestamp', nullable: false })
  startDate: Date;

  @Column({ type: 'timestamp', nullable: false })
  endDate: Date;

  @Column({ type: 'boolean', default: true })
  activity: boolean;

  @ManyToOne(() => Company, (company) => company.serviceFees, { onDelete: 'CASCADE' })
  company: Company;  // Many service fees can be associated with one company
}
