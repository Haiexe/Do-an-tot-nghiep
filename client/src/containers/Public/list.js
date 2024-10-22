import React from 'react'
import { Button, Item } from '../../components'


const list = () => {
  return (
    <div className='w-full border p-2 bg-white shadow-md rounded-md'>
        <div className='flex items-center justify-between my-3'>
            <h4 className='text-xl font-semibold'>Danh sách tin đăng</h4>
            <span>Cập nhật: 21/10/2024</span>
        </div>
        <div className='flex items-center gap-1 my-2'>
            <span>Sắp xếp:</span>
            <Button bgColor='bg-gray-200' text='Mặc định'/>
            <Button bgColor='bg-gray-200' text='Mới nhất'/>
        </div>
        <div className='items'>
            <Item/>
            {/* <Item/>
            <Item/> */}
        </div>
    </div>
  )
}

export default list
