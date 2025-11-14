export interface PaginatedResult<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page?: number;
  pagingCounter?: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage?: number | null;
  nextPage?: number | null;
}

export interface Params<T> {
  page: number;
  limit: number;
  search?: string;
  searchField?: (keyof T)[];
  sort: 1 | -1;
}
