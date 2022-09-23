import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertExample1663941981450 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO examples(first_name, last_name, email, phone, address)
VALUES ('Indra', 'Hasan', 'indra.hasan@221mail.com','0878928811', 'Bandung'),
('Soni', 'Wilmax', 'sony.wilmax@221mail.com','0878890111', 'Bandung'),
('Ken', 'Arok', 'ken.arok@221mail.com','0987188277', 'Jakarta');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE * FROM examples`);
  }
}
