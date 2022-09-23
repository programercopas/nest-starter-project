import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateExample1663313474320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'examples',
        columns: [
          {
            name: 'example_id',
            type: 'uuid',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'uuid',
            default: `uuid_generate_v4()`,
          },
          {
            name: 'first_name',
            type: 'varchar(10)',
          },
          {
            name: 'last_name',
            type: 'varchar(10)',
          },
          {
            name: 'email',
            type: 'varchar(25)',
            isUnique: true,
          },
          {
            name: 'phone',
            type: 'varchar(25)',
            isNullable: true,
          },
          {
            name: 'address',
            type: 'text',
            isNullable: true,
          },
          {
            isNullable: false,
            name: 'created_date',
            type: 'timestamp',
            default: 'now()',
          },
          {
            isNullable: true,
            name: 'updated_date',
            type: 'timestamp',
          },
        ],
      }),
      true,
    );

    await queryRunner.createIndex(
      'examples',
      new TableIndex({
        name: 'IDX_EXAMPLE_EMAIL',
        columnNames: ['email'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('examples', 'IDX_EXAMPLE_EMAIL');
    await queryRunner.dropTable('examples');
  }
}
