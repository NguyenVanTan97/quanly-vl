import { PropsWithClassName } from "../../core/prop-interface";

export function BookingCard(
 props: {
  border?: boolean;
  classNameInner?: string;
 } & React.PropsWithChildren &
  PropsWithClassName
) {
 return (
  <div
   className={`${
    props.border
     ? "bg-gradient-to-r from-[#9a5c95] to-[#a73c78] p-[1px]"
     : "border border-cgray"
   } ${props.className}`}
  >
   <div className={`bg-[#f9f9f9] p-6 ${props.classNameInner}`}>
    {props.children}
   </div>
  </div>
 );
}
