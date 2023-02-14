import { useMemo } from 'react';
import Image from 'next/image';

let Paginate = (props) => {
  const { 
    children,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    pageIndex,
    pageSize,
    filteredRows,
  } = props;

  let arr = useMemo(() => {
    let indices = new Set();

    indices.add(0);
    if (pageCount > 1) indices.add(1);
    indices.add(pageCount - 1);
    if (pageCount > 2) indices.add(pageCount - 2);
    indices.add(pageIndex);

    let arr = [...indices].sort((a, b) => a - b);

    let i = 0;

    while (i + 1 < arr.length) { 
      if (arr[i] !== '...' && arr[i] + 1 !== arr[i + 1]) {
        arr.splice(i + 1, 0, '...');
      }
      i++
    }
    
    arr.splice(0, 0, '<');
    arr.push('>');

    return arr;
  }, [pageCount, pageIndex]);
    
  return (
    <div className='shadow-md shadow-slate-500/50 w-full flex flex-col justify-between mt-8 border-0 rounded-t-xl'>
      { children }
      <div className="pagination flex justify-between items-center m-6">
        <div>
          <span className='text-gray-500 text-sm'>
            Showing
            <strong> {pageIndex * pageSize + 1}</strong>
            -
            <strong>{Math.min((pageIndex + 1) * pageSize, filteredRows.length)} </strong>
            of
            <strong> { filteredRows.length } </strong>
            results
          </span>
        </div>
        <div className='flex items-center'>
          {
            arr.map((item, index) => {
              if (item === '...') {
                return (
                  <button 
                    key={index}
                    disabled={true}
                    className='w-12 h-10 flex justify-center items-center border border-r-0 border-gray-300'
                  >
                    ...
                  </button>
                )
              } else if (item === '<') {
                return (
                  <button 
                    key={index} 
                    onClick={() => previousPage()} 
                    disabled={!canPreviousPage}
                    className='w-12 h-10 flex justify-center items-center border border-r-0 border-gray-300 rounded-l-lg'
                  >
                    <Image src='/left-paginate.svg' width={5} height={5} />
                  </button>
                )
              } else if (item === '>') { return (
                  <button 
                    key={index} 
                    onClick={() => nextPage()} 
                    disabled={!canNextPage}
                    className='w-12 h-10 flex justify-center items-center border border-gray-300 rounded-r-lg'
                  >
                    <Image src='/right-paginate.svg' width={5} height={5} />
                  </button>
                )
              } else {
                return (
                  <button 
                    key={index} 
                    onClick={() => gotoPage(item)} 
                    disabled={pageIndex === item}
                    className={`${pageIndex === item ? 'bg-blue-100 text-blue-600' : ''} w-12 h-10 flex justify-center items-center border border-r-0 border-gray-300`}
                  >
                    {item + 1}
                  </button>
                )
              }
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Paginate 
