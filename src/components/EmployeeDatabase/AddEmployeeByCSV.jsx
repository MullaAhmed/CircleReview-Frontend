import { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@/AppContext';

let AddEmployee = () => {
  const { setEmployeeMode } = useContext(AppContext);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-75">
      <div
        className="fixed top-0 bottom-0 left-0 right-0 cursor-pointer"
        onClick={() => setEmployeeMode('view')}
      />
      <div className='fixed inset-0 m-auto w-[586px] h-[624px] flex flex-col items-center border border-gray-300 rounded-lg bg-white'>
        <div className='w-full p-6 flex justify-between'>
          <div>
            <p className='text-xl font-bold'>Add Team Members</p>
            <p className='text-gray-600'>Add Manually/Upload a CSV</p>
          </div>
          <div>
            <Image src="/close-icon.svg" width={15} height={15} />
          </div>
        </div>
        <div className='w-full px-6 flex flex-col gap-1'>
          <div className='h-16 flex justify-between border border-gray-300 rounded-lg py-3 px-2 items-center'>
            <div className='font-semibold pl-2'>
              Add Manually
            </div>
            <button 
              className='flex text-sm items-center justify-around border border-gray-800 p-2 w-40 rounded-xl'
              onClick={() => setEmployeeMode('add_manually')}
            >
              <Image src="/plus-icon-dark.svg" width={10} height={10} />
              Add Members
            </button>
          </div>
          <div className='flex items-center gap-2'>
            <p className='border h-[2px] flex-auto'></p>
            <p className='font-semibold'>Or</p>
            <p className='border h-[2px] flex-auto'></p>
          </div>
          <div className='flex flex-col items-start border border-gray-300 rounded-lg p-2 gap-4'>
            <div className='pl-2'>
              <p className='font-semibold'>Upload CSV</p>
              <p className='text-sm text-gray-600'>Upload and attach file.</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-4 w-full h-52 border border-dashed rounded-md'>
              <Image src="/click-or-drag-image.svg" width={120} height={120} />
              <p>
                <span className='font-semibold underline'>Click to Upload</span>
                {' '}or drag and drop
              </p>
            </div>
            <div className='flex w-2/5 justify-around'>
              <Image src="/download-icon.svg" width={20} height={20} />
              Download Sample File
            </div>
          </div>
          <p className='my-4 border h-[2px] flex-auto'></p>
        </div>
        <div className='flex items-center justify-end w-full px-6 gap-2'>
          <button className="w-28 h-10 rounded-md border border-gray-800">Cancel</button>
          <button 
            className="w-28 h-10 bg-blue-500 text-white rounded-md"
            onClick={() => setEmployeeMode('view')}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
