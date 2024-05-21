import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

 const Loading = () => {
  return (
   <div className="flex flex-col space-y-3">
      <Skeleton className="h-[50vh] w-full rounded-xl" />
      {/* <h1>Loading.....</h1> */}
      {/* <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div> */}
    </div>
  )
}

export default Loading