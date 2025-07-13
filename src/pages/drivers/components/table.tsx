// src/components/component/Table.tsx
import React from 'react'
import { useTable } from 'react-table'

import { Column } from 'react-table'

interface TableProps {
  data: readonly object[]
  columns: readonly Column<object>[]
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <table {...getTableProps()} className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-50'>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500'
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className='divide-y divide-gray-200 bg-white'
      >
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td
                  {...cell.getCellProps()}
                  className='whitespace-nowrap px-6 py-4 text-sm text-gray-500'
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
