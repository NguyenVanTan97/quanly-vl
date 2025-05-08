import { PropsWithClassName } from "../../core/prop-interface";

export function TextArea(
 props: { onChange?: (val: string) => void; rows?: number } & PropsWithClassName
) {
 return (
  <textarea
   className={`outline-none border border-cgray ${props.className || ""}`}
   onChange={(e) => props.onChange && props.onChange(e.target.value)}
   rows={props.rows}
  ></textarea>
 );
}
