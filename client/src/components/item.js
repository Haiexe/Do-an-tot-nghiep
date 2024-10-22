import React, { memo } from "react";
import icons from "../utils/icons";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/22/l-p470661-2205240032-at-628bc521a44ed-1_1655846793.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/22/49947625-1239512099531093-1406786949775097856-n_1655846779.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/22/50012419-278459509516034-5318313970908528640-n_1655846779.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2022/06/22/50730735-2249389168667360-6173524706382053376-n_1655846779.jpg",
];

const { GrStar, RiHeartFill, RiHeartLine, BsBookmarkStarFill } = icons;

const item = () => {
  return (
    <div className="w-full flex border-t border-orange-600 p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center">
        <img
          src={images[0]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
            <div className="flex items-start">
                <div className=" text-red-500 font-medium">
                    <GrStar className="start-item" size={18} color='yellow'></GrStar>
                    <GrStar className="start-item" size={18} color='yellow'></GrStar>
                    <GrStar className="start-item" size={18} color='yellow'></GrStar>
                    <GrStar className="start-item" size={18} color='yellow'></GrStar>
                    <GrStar className="start-item" size={18} color='yellow'></GrStar>
                    Phòng trọ dạng căn hộ mini cao cấp tại 796 Lê Đức Thọ, P.15, Quận Gò Vấp
                </div>
            </div>
            <div className="w-[10%] flex justify-end">
            <BsBookmarkStarFill size={24} color="orange"/>
            </div>   
        </div>
        <div className="my-2 flex items-center justify-between">
                <span className="font-bold text-green-600">3tr/tháng</span>
                <span>28m2</span>
                <span>Thái Bình</span>
        </div>
        <p className="text-gray-500">Cho thuê căn hộ mini cao cấp tại 796 Lê Đức Thọ, Phường 15, Quận Gò Vấp, Tp. Hồ Chí Minh.Diện tích 30m2, giá 3 triệu/tháng.Có hầm giữ xe, có thang máy,…</p>
        <div className="flex items-center my-5 justify-between">
            <div className="flex items-center">
                <img src='https://fit.agu.edu.vn/storage/app/files/staffs/cnkhanh/noface.jpg' alt='avt' className="w-[30px] h-[30px] object-cover rounded-full"/>
                <p>Tuệ thu</p>
            </div>
            <div className="flex items-center gap-1">
                <button type="button" className="bg-blue-700 text-white p-1 rounded-md">
                    gọi 003402023
                </button>
                <button type="button" className="text-blue-700 rounded-md border border-blue-700">
                    Nhắn Zalo
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default memo(item);
