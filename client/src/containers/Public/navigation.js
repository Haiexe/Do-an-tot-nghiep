import React from "react";
// import {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
// import { apiGetCategory } from "../../services/category";
import { fomatVietnameseToString } from "../../utils/constant";

const nav = [
  {value:"Cho thuê phòng trọ", code:"cho-thue-phong-tro"}, 
  {value:"Nhà cho thuê", code:"nha-cho-thue"},
  {value:"Cho thuê căn hộ", code:"cho-thue-can-ho"}, 
  {value:"Cho thuê mặt bằng", code:"cho-thue-mat-bang"},  ]

const notActive = 'hover:bg-secondary2 h-full flex items-center py-2 px-4 bg-secondary1'
const active = 'hover:bg-secondary2 h-full flex items-center bg-secondary2 py-2 px-4'

const Navigation = () => {
  // const [categories, setCategories] = useState([])
  // useEffect(() => {
  //    const fetchCategories = async () => {
  //     const response = await apiGetCategory()
  //     if(response?.data.error === 0){
  //       setCategories(response.data.response )
  //     }
  //    }
  //    fetchCategories()
  //    console.log(categories)
  // },[])

  return (
      <div className="w-screen bg-secondary1 text-white h-[40px] flex justify-center items-center">
        <div className="w-1100 flex h-full items-center text-sm font-medium ">
          <NavLink 
                  to= {`/`} 
                  className={({isActive}) => isActive ? active : notActive}
                >
                  Trang chủ
                </NavLink>
          {/* {categories?.length > 0 && categories.map(item => {
            return (
              <div key= {item.code} className="h-full flex justify-center items-center"> 
                <NavLink 
                  to= {`${fomatVietnameseToString(item.value)}`} 
                  className={({isActive}) => isActive ? active : notActive}
                >
                  {item.value}
                </NavLink>
              </div>
            )
          })} */}
          {nav?.length > 0 && nav.map((item, index) => {
            return (
              <div key= {index} className="h-full flex justify-center items-center"> 
                <NavLink 
                  to= {`${fomatVietnameseToString(item.value)}`} 
                  className={({isActive}) => isActive ? active : notActive}
                >
                  {(item.value)}
                </NavLink>
              </div>
            )
          })}
        </div>
      </div>
    );
};

export default Navigation;
