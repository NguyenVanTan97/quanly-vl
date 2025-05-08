import { useTranslation } from "react-i18next";
import { PropsWithClassName } from "../../core/prop-interface";

export function FormInput(
  props: {
    label: string;
    totalNights?: string;
    required?: boolean;
    classNameContent?: string;
  } & React.PropsWithChildren &
    PropsWithClassName
) {
  const {t}= useTranslation('booking')
  return (
    <div className={`flex flex-col gap-1 ${props.className}`}>
      <span className={`text-sm md:text-base font-bold ${props.itemClassName}`}>
        {props.label}
        {props.required && (
          <>
            <span className="text-red-800 text-sm "> *</span>
          </>
        )}
        <span className="float-right text-primary mt-1 md:mt-0">
          {props.totalNights} {props.totalNights && t('labelTotalNights')}
        </span>
      </span>
      <div className={`w-full ${props.classNameContent || ""}`}>
        {props.children}
      </div>
    </div>
  );
}
