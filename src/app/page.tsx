import AppAreaChart from '@/components/AppAreaChart'
import AppChart from '@/components/AppChart'
import AppPieChart from '@/components/AppPieChart'
import CardList from '@/components/CardList'
import ToDoList from '@/components/ToDoList'
// import { Button } from '@/components/ui/button'
// import { CirclePlus } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* for button  */}
      {/* <div className='h-screen flex items-center justify-center' >
         <Button  size="xl" className=' rounded-ful text-custom-color'>
          <CirclePlus/> 
          click me</Button>
     </div> */} 


     <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4'>

        <div className=' bg-primary-foreground p-4 rounnded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'> 
            <AppChart/>
        </div>

        <div className=' bg-primary-foreground p-4 rounnded-lg'> 
          <CardList title='latestTransactions'/>
        </div>


        <div className=' bg-primary-foreground p-4 rounnded-lg'> 
            <AppPieChart/>
        </div>
        <div className=' bg-primary-foreground p-4 rounnded-lg'> 
          <ToDoList/>
        </div>
        <div className=' bg-primary-foreground p-4 rounnded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 '> 
            <AppAreaChart/>
        </div> 

        <div className=' bg-primary-foreground p-4 rounnded-lg'> 
          <CardList title='popularContent'/>
        </div>
     </div>

    </div>
  )
}

export default page