import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export class DefaultEntity extends BaseEntity {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    name: 'created_date',
  })
  public createdDate: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
    name: 'updated_date',
  })
  public updatedDate: Date;
}
