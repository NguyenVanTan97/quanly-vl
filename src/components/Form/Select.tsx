import { useState } from "react";
import { PropsWithClassName } from "../../core/prop-interface";
import { YesIcon, NoIcon } from "./InputText";
export type SelectAttributes = PropsWithClassName &
  React.PropsWithChildren &
  React.SelectHTMLAttributes<any>;
export function Select(props: SelectAttributes) {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className="relative">
      {!props.disabled && (
        <div className="absolute top-1/2 -translate-y-1/2 right-6">
          {value || props.value ? <YesIcon /> : <NoIcon />}
        </div>
      )}
      <select
        {...props}
        onChange={(e) => {
          setValue(e.target.value);
          props.onChange && props.onChange(e);
        }}
        className={
          "outline-none border border-cgray px-4 py-2 text-xs md:text-sm bg-transparent " +
          props.className
        }
      >
        {props.children}
      </select>
    </div>
  );
}
