import { OrderInterface } from '../interfaces/order.interface';
import { camelToSnakeCase, toLowerCase, trim } from './helper';
import { REPOSITORY } from '../constants/repository.constant';
import { FilterInterface } from '../interfaces/filter.interface';

export const transformOrderParameter = (
  orderParameter: string,
): OrderInterface => {
  const order: OrderInterface = {
    orderBy: 'id', // make default order by id
    orderType: 'desc',
  };
  const splitOrder = orderParameter.split(':');
  if (splitOrder.length === 2) {
    const orderType = toLowerCase(trim(splitOrder[1]));
    order.orderBy = camelToSnakeCase(trim(splitOrder[0]));
    order.orderType = REPOSITORY.ORDER.includes(orderType) ? orderType : 'desc';
  }
  return order;
};

export const transformFilterParameter = (
  filterString: string,
): FilterInterface => {
  const filter: FilterInterface = {
    operation: '',
    value: '',
  };
  const splitFilter = filterString.split(':');
  if (splitFilter.length === 2) {
    filter.value = splitFilter[0].toString();
    for (const condition of REPOSITORY.CONDITION) {
      if (condition.key === toLowerCase(splitFilter[1])) {
        filter.operation = condition.value;
        break;
      }
    }
  }
  return filter;
};

export const generateStringOrder = (
  orderParameter: string,
  tableAlias = '',
): string => {
  const orderObject: OrderInterface = transformOrderParameter(orderParameter);
  if (tableAlias !== '') {
    orderObject.orderBy = tableAlias + '.' + orderObject.orderBy;
  }
  return `order by ${orderObject.orderBy} ${orderObject.orderType}`;
};

export const generateStringFilter = (
  filterString: string,
  field: string,
  isString = true,
): string => {
  const filter: FilterInterface = transformFilterParameter(filterString);
  const value = isString ? `'${filter.value}'` : `${filter.value}`;
  return `${field} ${filter.operation} ${value}`;
};
