import { PropsWithClassName } from "../../core/prop-interface";

export function BookingTitle(
 props: { title: string; gradient?: boolean } & PropsWithClassName
) {
 return (
  <div
   className={`${
    props.gradient ? "gradient-text" : "text-text-body"
   }  font-semibold mb-3 text-lg md:text-xl ${props.className}`}
  >
   {props.title}
  </div>
 );
}
