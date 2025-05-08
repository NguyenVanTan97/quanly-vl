"use client";

import { useMainContext, VatLieuEntity } from "@/context/main.context";
import { BoLoc } from "./boLoc";
import { shareService } from "@/shared/services/share.service";
import ThoiGianTiepNhan from "../ThoiGianTiepNhan";
import { useEffect, useState } from "react";
import { Table } from "antd";



export function TableVatLieu() {
  const { vatLieus } = useMainContext();

  const itemsPerPage = 10; // Số hàng mỗi trang
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [datas, setDatas] = useState<VatLieuEntity[]>([]);

  // Xử lý khi nhấn nút phân trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(vatLieus.length / itemsPerPage));
    const startIndex = (currentPage - 1) * itemsPerPage;
    setDatas(vatLieus.slice(startIndex, startIndex + itemsPerPage));
  }, [vatLieus]);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  
 

  return (
    <div className="flex flex-col mt-20 mx-2 md:mx-20 py-8">
      <BoLoc onFind={setDatas} />
      <Table dataSource={dataSource} columns={columns} rowKey="ten" />;
      {/* {datas.length > 0 && (
        <div>
          <table className="min-w-full border border-gray-300 ">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border-b border-r">Tên</th>
                <th className="p-3 border-b border-r  ">Giá bán</th>
                <th className="p-3 border-b md:border-r">ĐV bán</th>

                <th className="p-3 border-b  border-r hidden md:table-cell">
                  Giá nhập
                </th>
                <th className="p-3 border-b border-r hidden md:table-cell ">
                  ĐV nhập
                </th>
                <th className="p-3 border-b border-r hidden md:table-cell ">
                  Số lượng
                </th>
                <th className="p-3 border-b hidden md:table-cell">Ngày nhập</th>
              </tr>
            </thead>
            <tbody>
              {datas.length > 0 &&
                datas.map((item) => (
                  <tr key={item.ten} className="hover:bg-gray-50">
                    <td className="p-3 border-b border-r font-semibold">
                      {item.ten}
                    </td>
                    <td className="p-3 border-b border-r font-semibold">
                      {shareService.formatNumber(item.giaBan)}
                    </td>
                    <td className="p-3 border-b text-center md:border-r">
                      {item.dvBan}
                    </td>

                    <td className="p-3 border-b border-r hidden md:table-cell">
                      {shareService.formatNumber(item.giaNhap)}
                    </td>
                    <td className="p-3 border-b border-r hidden md:table-cell">
                      {item.dvNhap}
                    </td>
                    <td className="p-3 border-b border-r hidden md:table-cell">
                      {item.soLuongNhap}
                    </td>
                    <td className="p-3 border-b  hidden md:table-cell">
                      <ThoiGianTiepNhan value={item.ngayNhapKho} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )} */}
    </div>
  );
}
