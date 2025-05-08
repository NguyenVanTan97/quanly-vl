import { useMainContext } from "@/context/main.context";
import { BoLoc } from "./boLoc";
import { shareService } from "@/shared/services/share.service";
import ThoiGianTiepNhan from "../ThoiGianTiepNhan";

export function TableVatLieu() {
  const { vatLieus } = useMainContext();

  return (
    <div className="flex flex-col mt-20 mx-2 md:mx-20">
      <BoLoc />
      {vatLieus && (
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
            {vatLieus.map((item) => (
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
      )}
    </div>
  );
}
