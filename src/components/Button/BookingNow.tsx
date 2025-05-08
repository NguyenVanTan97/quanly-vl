import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
export function ActionHeaderButton(props: {
 color?: "secondary";
 className?: string;
 title?: React.ReactNode;
 onClick?: (event: React.MouseEvent) => void;
}) {
 return (
  <button
   onClick={props.onClick}
   className={
    `${props.className} uppercase px-3 md:px-6 py-[3px] md:py-1 text-xs md:text-base font-bold -skew-x-6 ` +
    (props.color === "secondary"
     ? "text-primary bg-white"
     : "bg-gradient-to-r from-primary to-primary-700 text-white")
   }
  >
   {props.title}
  </button>
 );
}

export function BookingNowButton(props: {
 color?: "secondary";
 className?: string;
}) {
 const { t } = useTranslation("default");
 return (
  <Link href="/booking">
   <ActionHeaderButton
    color={props.color}
    title={t("bookingButton")}
    className={props.className}
   />
  </Link>
 );
}
