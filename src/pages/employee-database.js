import Sidebar from '@/components/Sidebar'
import ViewEmployees from '@/components/EmployeeDatabase/ViewEmployees'

export default function EmployeeDetails() {
  return (
    <div className='flex flex-row w-screen'>
      <Sidebar />
      <ViewEmployees />
    </div>
  )
}
