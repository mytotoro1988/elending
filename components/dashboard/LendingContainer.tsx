import Image from "next/image";
11111;
import React from "react";

const LendingContainer = () => {
  const list = [
    {
      title: "Vay vốn dễ dàng",
      content:
        "Thẩm định/phê duyệt hồ sơ dựa vào dữ liệu sẵn có trên phần mềm Bkav eHoadon",
    },
    {
      title: "Lãi suất ưu đãi",
      content:
        "Kết nối với nhiều đối tác tài chính uy tín <hr/> Nhiều Gói vay ưu đãi cho khách hàng lựa chọn",
    },
  ];
  return (
    <div className="flex justify-center md:justify-start p-4 items-center bg-gradient-to-t from-[#0A4297] to-[#016BB8] h-[200px] md:h-[600px]">
      <div>Vay vốn khó - có Bkav Elending lo</div>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LendingContainer;
