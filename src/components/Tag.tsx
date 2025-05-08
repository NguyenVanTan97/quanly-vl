import { PropsWithClassName } from "../core/prop-interface";

export function Tag(props: React.PropsWithChildren & PropsWithClassName) {
 return (
  <div
   className={`border border-green-700 bg-[#e7fde9] text-green-700 text-2xs md:text-xs px-2 py-1 flex gap-x-1.5 items-center ${
    props.className || ""
   }`}
  >
   {props.children}
  </div>
 );
}
