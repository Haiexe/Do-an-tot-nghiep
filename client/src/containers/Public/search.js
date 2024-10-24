import React from 'react'
import {SearchItem} from '../../components/'
import icons from '../../utils/icons'

const {BsChevronRight, HiOutlineLocationMarker, TbReportMoney, RiCrop2Line, FaHouse, FaSearch } = icons

const search = () => {
  return (
    <div className='w-3/5 p-[10px] my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
      <SearchItem IconBefore={<FaHouse/>} IconAfter={<BsChevronRight color='rgb(156, 163, 175)'/>}text='Phòng trọ, nhà trọ' fontWeight/>
      <SearchItem IconBefore={<HiOutlineLocationMarker/>} IconAfter={<BsChevronRight color='rgb(156, 163, 175)'/>} text='Toàn quốc'/>
      <SearchItem IconBefore={<TbReportMoney/>} IconAfter={<BsChevronRight color='rgb(156, 163, 175)'/>} text='Chọn giá'/>
      <SearchItem IconBefore={<RiCrop2Line/>} IconAfter={<BsChevronRight color='rgb(156, 163, 175)'/>} text='Chọn diện tích'/>
      <button 
        type = 'button' 
        className='outline-none py-2 px-4 w-full bg-secondary1 text-sm  text-[13.3] flex items-center justify-center gap-2 text-white font-medium'
      >
        <FaSearch/>
        Tìm kiếm
      </button>
    </div>
  )
}

export default search
