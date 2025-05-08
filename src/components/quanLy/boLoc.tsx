import { useMainContext, VatLieuEntity } from "@/context/main.context";
import { useEffect, useState } from "react";

export function BoLoc({ onFind }: { onFind: (lst: VatLieuEntity[]) => void }) {
  const { setVatLieus, vatLieus, getVatLieuDien, getVatLieuNuoc } =
    useMainContext();
  const [isDien, setIsDien] = useState<boolean>(false);

  //   useEffect(() => {
  //     googleSheetService
  //       .readGoogleSheet(
  //         environment.excel.Url,
  //         environment.excel.range.vatLieuNuoc
  //       )
  //       .then((data) => {
  //         // console.log(data);

  //         // setVatLieus(data as Array<VatLieuEntity>);
  //       });
  //   }, []);

  return (
    <div className="text-black flex">
      <input
        className="border border-gray-300 p-2"
        type="text"
        onBlur={(e) => {
          if (!e.target.value) {
            onFind(vatLieus);
          }
          const item = vatLieus.filter((item) =>
            item.ten.toLowerCase().includes(e.target.value.trim().toLowerCase())
          );
          onFind(item);
        }}
      />
    </div>
  );
}
