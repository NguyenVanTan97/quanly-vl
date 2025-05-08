export function Button(
 props: {
  gradientText?: boolean;
  color?: "primary";
  className?:string;
  onClick?: () => void;
 } & React.PropsWithChildren
) {
 return (
  <button
   className={`gradient p-[1px] hover:-translate-y-1 transition ${
    props.color === "primary" ? "hover:bg-gradient-to-b" : ""
   }`}
   onClick={props.onClick}
  >
   <div
    className={`${
     props.color === "primary" ? "text-white" : "bg-white"
    } py-1 px-4 font-medium text-xs md:text-sm ${props.className}`}
   >
    {props.gradientText ? (
     <span className="gradient-text">{props.children}</span>
    ) : (
     props.children
    )}
   </div>
  </button>
 );
}
