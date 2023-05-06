import React from 'react'
import SingleRow from './SingleRow'


function Background() {
  return (
    <div className='grid grid-cols-2 w-full auto-rows-[500px] top-[-400px] left-0 bg-[#121519] absolute -z-[1]'>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
      <SingleRow />
      <SingleRow type={1}/>
    </div>
  )
}

export default Background