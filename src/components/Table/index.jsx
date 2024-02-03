import React from 'react';
import { useTable, usePagination } from 'react-table';
import Pagination from '../Pagination';

export default function Table({ columns, data, ...props }) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    page, // Instead of using 'rows', we'll use page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    setHiddenColumns,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        hiddenColumns: props.hiddenColumns ?? [],
        pageIndex: 0,
      },
    },
    usePagination
  );

  React.useEffect(() => {
    setHiddenColumns(props.hiddenColumns ?? []);
  }, [props?.hiddenColumns]);

  return (
    <>
      <div className="flex items-center justify-start ml-10 text-lg font-bold">
        Order History
      </div>
      <div className="table-responsive mx-10">
        <table
          {...getTableProps()}
          className="table w-full border-b border-collapse border-gray-200"
        >
          <thead className="top-0 z-10 border-t border-gray-200">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="px-3 py-2 text-sm font-semibold text-left border-r border-gray-300 whitespace-nowrap"
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell, i) => {
                    return (
                      <td
                        className={`text-sm cursor-pointer px-3 py-2 border border-gray-200 ${
                          i === 0 ? 'first:border-l' : ''
                        } ${
                          i === Object.values(row).length - 1
                            ? 'last:border-r'
                            : ''
                        } ${
                          rowIndex === page.length - 1 ? 'last-child-td' : ''
                        }`}
                        {...cell.getCellProps()}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
