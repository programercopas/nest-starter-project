import { PaginationOptionsInterface } from '../interfaces/pagination.options.interface';

export const createPaginationOptions = (req) => {
  let page = parseInt(req.query.page, 10) || 1;
  let limit = parseInt(req.query.limit, 10) || 20;

  if (page <= 0) {
    page = 1;
  }
  if (limit <= 0) {
    limit = 20;
  }

  const pagination: PaginationOptionsInterface = {
    page,
    limit,
    queryPage: (page - 1) * limit,
    order: '',
  };
  return pagination;
};
