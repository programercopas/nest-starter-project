import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DefaultEntity } from './default.entity';

@Entity('examples')
class ExampleEntity extends DefaultEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'example_id' })
  exampleId: string;

  @Column('varchar', { name: 'first_name' })
  firstName: string;

  @Column('varchar', { name: 'last_name' })
  lastName: string;

  @Column('varchar', { name: 'email' })
  email: string;

  @Column('varchar', { name: 'phone' })
  phone: string;

  @Column('text', { name: 'address' })
  address: string;
}

export default ExampleEntity;
