import Image from "next/image";
import React from "react";

const Slider = () => {
  const list = [
    "Kết nối vay tín chấp doanh nghiệp",
    "Vay vốn dễ dàng",
    "Thủ tục đơn giản",
  ];
  return (
    <div className="flex justify-center md:justify-start p-4 items-center bg-gradient-to-t from-[#0A4297] to-[#016BB8] h-[200px] md:h-[600px]">
      <div className="flex justify-between items-center md:container h-20 md:h-40">
        <div className="flex justify-center flex-col flex-2 ">
          <div className="text-[#fff] text-3xl mb-4">
            Nền tảng kết nối vay vốn
          </div>
          {list.map((item, index) => (
            <div key={index} className="mb-2 flex">
              <Image width={10} height={10} src="/tick.svg" alt="tick" />
              <div className="text-[#fff] ml-3">{item}</div>
            </div>
          ))}
        </div>

        <div className="flex justify-center flex-col flex-2 hidden md:block">
          <Image
            width={500}
            height={500}
            src="/large-Logo-Slide.svg"
            alt="large-Logo-Slide"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
