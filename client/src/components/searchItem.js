import React, {memo} from 'react'

const searchItem = ({IconBefore, IconAfter, text, fontWeight}) => {
  return (
    <div className='bg-white py-2 px-4 w-full rounded-md text-gray-400 text-sm flex items-center justify-between text-[13.3px]'>
      <div className='flex items-center gap-1 w-full'>
        {IconBefore}
        <span className={`${fontWeight && 'font-medium text-black'} w-full overflow-hidden text-ellipsis whitespace-nowrap inline-block w-[100px]`}>{text}</span>
      </div>
      {IconAfter}
    </div>
  )
}

export default memo(searchItem)
