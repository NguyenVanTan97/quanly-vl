import React, { useState } from "react";
import { PropsWithClassName } from "../../core/prop-interface";

export function InputText(
  props: PropsWithClassName &
    React.InputHTMLAttributes<any> & {
      checkEmail?: boolean;
      checkNumberPhone?: boolean;
      email?: string;
    }
) {
  const [value, setValue] = useState<string>();
  const [vallid, setValid] = useState<boolean>(true);

  function checkEmail(email: string) {
    let regex = /^[a-z0-9]{2,}@[a-z0-9]{2,}.[a-z]{2,}$/;
    if (regex.test(email)) {
      if (props.email) {
        if (props.email === email) {
          setValid(true);
        } else {
          setValid(false);
        }
      } else {
        setValid(true);
      }
    } else {
      setValid(false);
    }
  }

  function checkNumberPhone(phone: string) {
    let regex = /^0\d{9}$/;
    if (regex.test(phone)) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 right-2">
        {value && value.length > 2 && vallid ? <YesIcon /> : <NoIcon />}
      </div>

      <input
        {...props}
        onChange={(val) => {
          if (val) {
            props.onChange && props.onChange(val);
            setValue(val.target.value);
            if (props.checkEmail) {
              checkEmail(val.target.value);
            }
            if (props.checkNumberPhone) {
              checkNumberPhone(val.target.value);
            }
          }
        }}
        className={`outline-none bg-transparent border  border-cgray px-6 text-sm py-2 w-full ${props.className}`}
      />
    </div>
  );
}

export function YesIcon() {
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.1398 2.5615C14.7258 1.9755 14.7258 1.0255 14.1398 0.4395C13.5538 -0.1465 12.6057 -0.1465 12.0197 0.4395L5.28375 7.1755L2.56175 4.4495C1.97575 3.8635 1.02375 3.8635 0.43975 4.4495C-0.14625 5.0335 -0.14625 5.9855 0.43775 6.5715L4.22175 10.3595C4.50375 10.6415 4.88575 10.7995 5.28375 10.7995L5.51994 10.7808C5.83047 10.7313 6.11975 10.5851 6.34375 10.3595L14.1398 2.5615Z"
        fill="#00A11A"
      />
    </svg>
  );
}

export function NoIcon(props: { className?: string }) {
  return (
    <svg
      className={`h-3 w-3 ${props.className}`}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25786 3.1391L2.5595 0.4395C1.9735 -0.1465 1.0255 -0.1465 0.4395 0.4395C-0.1465 1.0255 -0.1465 1.9735 0.4395 2.5595L3.13786 5.2591L0.4399 7.9555C-0.1461 8.5415 -0.1461 9.4895 0.4399 10.0755C0.7319 10.3695 1.1159 10.5155 1.4999 10.5155C1.8839 10.5155 2.2679 10.3695 2.5599 10.0755L5.25786 7.3791L7.9555 10.0755C8.2475 10.3695 8.6315 10.5155 9.0155 10.5155C9.3995 10.5155 9.7835 10.3695 10.0755 10.0755C10.6615 9.4895 10.6615 8.5415 10.0755 7.9555L7.37786 5.2591L10.0759 2.5595C10.6619 1.9735 10.6619 1.0255 10.0759 0.4395C9.4899 -0.1465 8.5419 -0.1465 7.9559 0.4395L5.25786 3.1391Z"
        fill="#A30000"
      />
    </svg>
  );
}
