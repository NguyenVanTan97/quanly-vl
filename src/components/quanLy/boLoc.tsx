import { useMainContext, VatLieuEntity } from "@/context/main.context";
import { useEffect, useState } from "react";

export function BoLoc() {
  const { setVatLieus, vatLieus } = useMainContext();
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

  return <div className="text-black flex">bo loc</div>;
}
