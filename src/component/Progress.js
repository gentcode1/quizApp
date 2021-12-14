import React from 'react'

const Progress = ({ progressPercentage }) => {
    return (
        <div className="h-4 w-full ring-2  ring-primary rounded-full  ">
           
            <div
              style={{ width: `${progressPercentage}%` }}
              className={`h-full rounded-full   flex items-center  ${
                progressPercentage < 50 ? "bg-red-500" : "bg-green-500"
              }`}
            >
                <div className='flex items-center justify-end'>
                    <p className='text-primary ml-64 font-semibold'>{progressPercentage}%</p>
               </div>    
               
                
                </div>
            
            
         
            
          </div>
    )
}

export default Progress
