import { TablePaginationConfig } from 'antd/lib/table';

function useTablePagination(
  currentSize: number,
  page: Page,
  requestPageChange: (page: Page) => void,
): TablePaginationConfig {
  const total =
    currentSize === page.limit
      ? page.index * currentSize + 1
      : page.index * page.limit - 1;
  return {
    onChange: (index, pageSize = page.limit): void =>
      requestPageChange({
        limit: pageSize,
        index,
        offset: (index - 1) * pageSize,
      }),
    total,
    showSizeChanger: false,
    current: page.index,
    pageSize: page.limit,
  };
}

export default useTablePagination;
