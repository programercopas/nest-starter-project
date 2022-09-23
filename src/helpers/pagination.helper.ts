import { PaginationOptionsInterface } from '../interfaces/pagination.options.interface';

export const createPaginationOptions = (query) => {
  let page = parseInt(query.page, 10) || 1;
  let limit = parseInt(query.limit, 10) || 20;

  if (page <= 0) {
    page = 1;
  }
  if (limit <= 0) {
    limit = 20;
  }

  const pagination: PaginationOptionsInterface = {
    page,
    limit,
    skip: (page - 1) * limit,
  };
  return pagination;
};
