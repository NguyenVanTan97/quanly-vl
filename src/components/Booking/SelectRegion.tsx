import Image from "next/image";
import { InputText } from "../Form/InputText";
import { PropsWithClassName } from "@/core/prop-interface";

export function InputPhone(
  props: {
    value?: string;
    onChange: (val: string) => void;
  } & PropsWithClassName
) {
  return (
    <div className="relative">
      <div className="absolute flex gap-x-2 items-center top-1/2 -translate-y-1/2 left-3">
        <div className="relative w-6 h-4">
          <Image src="/images/countries/vi-vn.png" fill alt="" />
        </div>
        <svg
          width="7"
          height="5"
          viewBox="0 0 7 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.0992058 0.681237C0.219455 0.560988 0.407626 0.550056 0.540225 0.648442L0.578214 0.681237L3.5 3.60287L6.42179 0.681237C6.54204 0.560987 6.73021 0.550056 6.86281 0.648441L6.90079 0.681237C7.02104 0.801486 7.03198 0.989657 6.93359 1.12226L6.90079 1.16024L3.7395 4.32153C3.61925 4.44178 3.43108 4.45272 3.29848 4.35433L3.2605 4.32153L0.0992058 1.16024C-0.0330686 1.02797 -0.0330686 0.813511 0.0992058 0.681237Z"
            fill="black"
          />
        </svg>
        <span className="text-xs md:text-sm">+84</span>
      </div>
      <InputText
        value={props.value}
        onChange={(e) => props.onChange && props.onChange(e.target.value)}
        className={`pl-24 ${props.itemClassName}`}
        type="number"
        checkNumberPhone={true}
      />
    </div>
  );
}
