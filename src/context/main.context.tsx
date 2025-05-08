import { environment } from "@/environments/environtment";
import { googleSheetService } from "@/shared/services/GoogleSheet.service";
import { createContext, useContext, useEffect, useState } from "react";

export interface VatLieuEntity {
  ten: string;
  dvNhap: string;
  giaNhap: number;
  dvBan: string;
  giaBan: number;
  soLuongNhap: string;
  ngayNhapKho: string;
  ngayCapNhat: string;
}
export interface IMainContext {
  vatLieus: Array<VatLieuEntity>;
  setVatLieus: (arr: Array<VatLieuEntity>) => void;
  getVatLieuDien: () => void;
  getVatLieuNuoc: () => void;
}

export const MainContext = createContext<IMainContext>({
  vatLieus: [],
  setVatLieus: (arr) => {},
  getVatLieuNuoc: () => {},
  getVatLieuDien: () => {},
});
export function MainProvider(props: React.PropsWithChildren) {
  const [vatLieus, setVatLieus] = useState<VatLieuEntity[]>([]);

  useEffect(() => {
    getVatLieuDien();
  }, []);

  const getVatLieuDien = () => {
    googleSheetService
      .readGoogleSheet(
        environment.excel.Url,
        environment.excel.range.vatLieuDien
      )
      .then((data) => {
        let arr: Array<VatLieuEntity> = (data as Array<VatLieuEntity>).map(
          (row) => ({
            ...row,
          })
        );
        setVatLieus(arr);
      });
  };
  const getVatLieuNuoc = () => {
    googleSheetService
      .readGoogleSheet(
        environment.excel.Url,
        environment.excel.range.vatLieuNuoc
      )
      .then((data) => {
        let arr: Array<VatLieuEntity> = (data as Array<VatLieuEntity>).map(
          (row) => ({
            ...row,
          })
        );
        setVatLieus(arr);
      });
  };

  return (
    <MainContext.Provider
      value={{
        vatLieus,
        setVatLieus,
        getVatLieuNuoc,
        getVatLieuDien,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}
