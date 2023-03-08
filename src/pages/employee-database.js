import Sidebar from '@/components/Sidebar'
import ViewEmployees from '@/components/EmployeeDatabase/ViewEmployees'
import Head from 'next/head'

export default function EmployeeDetails() {
  return (
    <>
      <Head>
        <title>Circle Review</title>
      </Head>
      <div className='flex flex-row w-screen'>
        <Sidebar />
        <ViewEmployees />
      </div>
    </>
  )
}
