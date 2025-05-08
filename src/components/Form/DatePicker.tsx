import _DatePicker from "react-datepicker";
import { PropsWithClassName } from "../../core/prop-interface";

import { SyntheticEvent, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { NoIcon, YesIcon } from "./InputText";
export function DatePicker(
  props: PropsWithClassName & {
    value?: Date;
    minDate?: Date;
    onChange?: (
      date: Date | null,
      event: SyntheticEvent<any, Event> | undefined
    ) => void;
  }
) {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <div className={`${props.className} relative `}>
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.4592 0C11.8032 0 12.0823 0.279138 12.0823 0.623077L12.0827 1.32741C13.2957 1.41058 14.3031 1.82607 15.0162 2.54058C15.7946 3.32233 16.2042 4.44636 16.2 5.7947V13.3738C16.2 16.1419 14.4421 17.8616 11.6133 17.8616H4.58668C1.75791 17.8616 0 16.1178 0 13.3107V5.79304C0 3.18209 1.56771 1.50613 4.12451 1.3277L4.12502 0.623077C4.12502 0.279138 4.40416 0 4.7481 0C5.09203 0 5.37117 0.279138 5.37117 0.623077L5.37092 1.31178H10.8357L10.8361 0.623077C10.8361 0.279138 11.1153 0 11.4592 0ZM14.9538 7.39717H1.24615V13.3107C1.24615 15.4424 2.43249 16.6155 4.58668 16.6155H11.6133C13.7675 16.6155 14.9539 15.464 14.9539 13.3738L14.9538 7.39717ZM11.7979 12.6246C12.1419 12.6246 12.421 12.9038 12.421 13.2477C12.421 13.5916 12.1419 13.8708 11.7979 13.8708C11.454 13.8708 11.1715 13.5916 11.1715 13.2477C11.1715 12.9038 11.4465 12.6246 11.7904 12.6246H11.7979ZM8.11138 12.6246C8.45532 12.6246 8.73446 12.9038 8.73446 13.2477C8.73446 13.5916 8.45532 13.8708 8.11138 13.8708C7.76744 13.8708 7.48498 13.5916 7.48498 13.2477C7.48498 12.9038 7.75997 12.6246 8.1039 12.6246H8.11138ZM4.41712 12.6246C4.76106 12.6246 5.04019 12.9038 5.04019 13.2477C5.04019 13.5916 4.76106 13.8708 4.41712 13.8708C4.07318 13.8708 3.78989 13.5916 3.78989 13.2477C3.78989 12.9038 4.0657 12.6246 4.40964 12.6246H4.41712ZM11.7979 9.39567C12.1419 9.39567 12.421 9.67481 12.421 10.0187C12.421 10.3627 12.1419 10.6418 11.7979 10.6418C11.454 10.6418 11.1715 10.3627 11.1715 10.0187C11.1715 9.67481 11.4465 9.39567 11.7904 9.39567H11.7979ZM8.11138 9.39567C8.45532 9.39567 8.73446 9.67481 8.73446 10.0187C8.73446 10.3627 8.45532 10.6418 8.11138 10.6418C7.76744 10.6418 7.48498 10.3627 7.48498 10.0187C7.48498 9.67481 7.75997 9.39567 8.1039 9.39567H8.11138ZM4.41712 9.39567C4.76106 9.39567 5.04019 9.67481 5.04019 10.0187C5.04019 10.3627 4.76106 10.6418 4.41712 10.6418C4.07318 10.6418 3.78989 10.3627 3.78989 10.0187C3.78989 9.67481 4.0657 9.39567 4.40964 9.39567H4.41712ZM10.8357 2.55794H5.37092L5.37117 3.35714C5.37117 3.70108 5.09203 3.98022 4.7481 3.98022C4.40416 3.98022 4.12502 3.70108 4.12502 3.35714L4.12458 2.5768C2.26346 2.73314 1.24615 3.8613 1.24615 5.79304V6.15101H14.9538L14.9539 5.79304C14.9572 4.76704 14.6814 3.9695 14.1339 3.42119C13.6533 2.93919 12.9507 2.65132 12.083 2.5772L12.0823 3.35714C12.0823 3.70108 11.8032 3.98022 11.4592 3.98022C11.1153 3.98022 10.8361 3.70108 10.8361 3.35714L10.8357 2.55794Z"
            fill="black"
            fill-opacity="0.27"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2">
        {value || props.value ? <YesIcon /> : <NoIcon />}
      </div>
      <_DatePicker
        minDate={props.minDate}
        onChange={(val, $event) => {
          setValue(val);
          props.onChange && props.onChange(val, $event);
        }}
        selected={props.value}
        className={`outline-none bg-transparent border pl-11 border-cgray px-6 text-sm md:text-base py-1 w-full ${props.itemClassName}`}
      />
    </div>
  );
}

export interface DateEntity {
  day: number;
  month: number;
  year: number;
}

export function convertDate(day: Date): DateEntity {
  let ngay = day.getDate().toString();
  let thang = (day.getMonth() + 1).toString();
  let nam = day.getFullYear().toString();

  if (day.getDate() < 10) {
    ngay = `0${day.getDate()}`;
  }
  if (day.getMonth() + 1 < 10) {
    thang = `0${day.getMonth() + 1}`;
  }

  const newDate: DateEntity = {
    day: parseInt(ngay),
    month: parseInt(thang),
    year: parseInt(nam),
  };

  return newDate;
}
