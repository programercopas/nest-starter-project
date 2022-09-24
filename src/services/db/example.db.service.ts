import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import ExampleEntity from '../../api/database/entities/example.entity';
import {Repository} from 'typeorm';
import {PaginationOptionsInterface} from '../../interfaces/pagination.options.interface';
import {ExamplePaginationPayloadDto} from '../../dto/example/example.pagination.payload.dto';
import {toDateTimeFormat} from "../../helpers/helper";
import {transformOrderParameter} from "../../helpers/repository.helper";

@Injectable()
export class ExampleDbService {
    constructor(
        @InjectRepository(ExampleEntity)
        private exampleEntity: Repository<ExampleEntity>,
    ) {
    }

    async listPaginationExample(
        pagination: PaginationOptionsInterface,
        params: ExamplePaginationPayloadDto,
    ): Promise<any> {
        const queryData = this.exampleEntity
            .createQueryBuilder('examples')
            .select([
                'examples.exampleId',
                'examples.firstName',
                'examples.lastName',
                'examples.email',
                'examples.address',
                'examples.createdDate',
            ])
            .limit(pagination.limit)
            .skip(pagination.skip);

        if (params.order) {
            const transformOrder = transformOrderParameter(params.order);
            queryData.orderBy(transformOrder.orderBy, (transformOrder.orderType === 'asc') ? 'ASC' : 'DESC');
        }
        const [data, total] = await queryData.getManyAndCount();

        const res = [];
        for (const value of data) {
            const createdDate = toDateTimeFormat(value.createdDate);
            delete value.createdDate;
            const formattedObjectResponse = {
                ...value,
                createdDate
            }
            res.push(formattedObjectResponse);
        }
        return {res, total};
    }
}
