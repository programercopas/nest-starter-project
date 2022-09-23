import { PaginationOptionsInterface } from '../interfaces/pagination.options.interface';

export const createPaginationOptions = (params) => {
  let page = parseInt(params.page, 10) || 1;
  let limit = parseInt(params.limit, 10) || 20;

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

export const createResponsePagination = (
  pagination: PaginationOptionsInterface,
  response: any,
  total: number,
  data: any,
): any => {
  let totalPage = Math.floor(total / pagination.limit);
  if (totalPage === 0 && total > 0) {
    totalPage = 1;
  }

  let nextPage = pagination.page + 1;
  if (totalPage < nextPage) {
    nextPage = 0;
  }

  response.currentPage = pagination.page;
  response.nextPage = nextPage;
  response.prevPage = pagination.page - 1;
  response.totalPage = totalPage;
  response.limit = pagination.limit;
  response.data = data;
  return response;
};
