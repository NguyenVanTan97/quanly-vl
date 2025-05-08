export function Select(
 props: { className?: string } & React.PropsWithChildren &
  React.SelectHTMLAttributes<any>
) {
 return (
  <select
   {...props}
   className={
    "border border-primary px-4 py-1 md:py-2 font-semibold  md:text-[20px] " +
    props.className
   }
  >
   {props.children}
  </select>
 );
}
