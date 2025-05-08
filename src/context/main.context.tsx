import { environment } from "@/environments/environtment";
import { googleSheetService } from "@/shared/services/GoogleSheet.service";
import { createContext, useContext, useEffect, useState } from "react";
interface IPriceEntity {
  title: string;
  day: string;
  usdPrice: string;
  vndPrice: string;
  price: number;
}
export interface IHourPriceEntity {
  title: string;
  vndPrice: string;
  usdPrice: string;
  price: number;
}
export interface IMainContext {
  roomPrices: Array<IPriceEntity>;
  hourPrices: Array<IHourPriceEntity>;
  language: string;
  unit: string;
  depositAmount: number;
  cancelationCost: number;
  setLanguage: (value: string) => void;
}

export const MainContext = createContext<IMainContext>({
  roomPrices: [],
  hourPrices: [],
  language: "",
  unit: "",
  cancelationCost: 0,
  depositAmount: 0,
  setLanguage: (value) => {},
});
export function MainProvider(props: React.PropsWithChildren) {
  const [language, setLanguage] = useState<string>(environment.defaultLanguge);
  const [unit, setUnit] = useState<string>(environment.defaultUnit);
  const [roomPrices, setRoomPrices] = useState<IPriceEntity[]>([]);
  const [hourPrices, setHourPrices] = useState<IHourPriceEntity[]>([]);
  const [cancelationCost, setCancelationCost] = useState<number>(0);
  const [depositAmount, setDepositAmount] = useState<number>(0);

  useEffect(() => {
    let unitEnum = {
      VND: "VND",
      USD: "$",
    };
    if (language === "VN") {
      setDepositAmount(environment.depositAmount.VND);
      setCancelationCost(environment.cancelationCost.VND);
      setUnit(unitEnum.VND);
    } else {
      setDepositAmount(environment.depositAmount.USD);
      setCancelationCost(environment.cancelationCost.USD);
      setUnit(unitEnum.USD);
    }
    // đọc dữ liệu giá của phòng theo giờ thuê
    googleSheetService
      .readGoogleSheet(
        environment.excel.Url,
        environment.excel.range.hourPriceSheet
      )
      .then((data) => {
        let arr: Array<IHourPriceEntity> = [];

        if (language === "VN") {
          arr = (data as Array<IHourPriceEntity>).map((row) => ({
            ...row,
            price: parseInt(row.vndPrice),
          }));
        } else {
          arr = (data as Array<IHourPriceEntity>).map((row) => ({
            ...row,
            price: parseInt(row.usdPrice),
          }));
        }
        setHourPrices(arr);
      });

    // đọc dữ liệu giá của phòng theo ngày thuê
    googleSheetService
      .readGoogleSheet(
        environment.excel.Url,
        environment.excel.range.roomTypePriceSheet
      )
      .then((data) => {
        let arr: Array<IPriceEntity> = [];

        if (language === "VN") {
          arr = (data as Array<IPriceEntity>).map((row) => ({
            ...row,
            price: parseInt(row.vndPrice),
          }));
        } else {
          arr = (data as Array<IPriceEntity>).map((row) => ({
            ...row,
            price: parseInt(row.usdPrice),
          }));
        }

        setRoomPrices(arr);
      });
  }, [language]);
  return (
    <MainContext.Provider
      value={{
        roomPrices,
        hourPrices,
        unit,
        language,
        setLanguage,
        depositAmount,
        cancelationCost,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}

export function useMainContext() {
  return useContext(MainContext);
}
