import { BusinessName } from "../../components/BusinessName";
import { Menu } from "./Menu";
import { Partners } from "./Partners";

export function Footer() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row gap-8">
      <div className="flex-1 w-full flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <BusinessName />
          <p className="mt-4 text-[11px] md:text-sm font-bold">
            DARLINGTON investment LIMITED
          </p>
          <div className="text-[11px] md:text-sm mt-1 md:mt-3 font-medium leading-5">
            <p className="leading-4 md:leading-5">
              Số 208 đường Nguyễn Hữu Cảnh, P.22, Q.Bình Thạnh, TP.HCM
            </p>
            <p className="mt-2 md:mt-0">P. 0938-294-338</p>
            <p>W. darlingtonsuite.com</p>
            <p>E. mail@darlington.one</p>
            <p>E. booking@darlingtonsuite.com</p>
            <p className="mt-2 md:mt-0">
              © 2022 DARLINGTON investment LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <Menu />
        </div>
        <div className="col-span-3">
          <Partners />
        </div>
      </div>
    </div>
  );
}
