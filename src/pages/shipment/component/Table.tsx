interface Column {
  Header: string
  accessor: string
}

interface TableProps<T> {
  data: T[]
  columns: Column[]
}

function Table<T>({ data, columns }: TableProps<T>) {
  return (
    <table className='w-full table-auto'>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className='px-4 py-2'>
              {column.Header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className='border px-4 py-2'>
                {String(row[column.accessor as keyof T])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
