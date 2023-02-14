import { useContext } from 'react';
import EmployeeDatabase from '@/components/Tables/EmployeeDatabase'
import AddEmployeeManually from '@/components/EmployeeDatabase/AddEmployeeManually';
import AddEmployeeByCSV from '@/components/EmployeeDatabase/AddEmployeeByCSV';
import AppContext from '@/AppContext';

let ViewEmployees = () => {
  const { employeeMode } = useContext(AppContext);

  return (
    <>
      <div className='w-full pl-12 pr-12 mt-12'>
        <div className='text-3xl font-bold'>
          Employee Database
        </div>
        <EmployeeDatabase />
      </div>
      {
        employeeMode === 'add_manually' && (
          <AddEmployeeManually />
        )
      }
      {
        employeeMode === 'add_by_csv' && (
          <AddEmployeeByCSV />
        )
      }
    </>
  )
}

export default ViewEmployees
