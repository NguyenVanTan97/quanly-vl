import { useTranslation } from "react-i18next";
import { useBookingContext } from "../../context/booking.context";
import { FormInput } from "../Form/FormInput";
import { InputText } from "../Form/InputText";
import { SelectCountry } from "../Select/Country";
import { BookingCard } from "./Card";
import { InputPhone } from "./SelectRegion";
import { BookingTitle } from "./Title";

export function CustomerInfo() {
  const { entity, setEntityValue } = useBookingContext();
  const { t } = useTranslation("booking");
  return (
    <div>
      <BookingTitle
        className="!text-base md:!text-xl"
        title={t('customerInfo.title')}
        gradient
      />
      <BookingCard border>
        <div className="flex gap-x-2 items-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4672 0C14.1784 0 16 1.9024 16 4.7328V11.2672C16 14.0976 14.1784 16 11.4656 16H4.5312C1.8208 16 0 14.0976 0 11.2672V4.7328C0 1.9024 1.8208 0 4.5312 0H11.4672ZM11.4672 1.2H4.5312C2.508 1.2 1.2 2.5864 1.2 4.7328V11.2672C1.2 13.4136 2.508 14.8 4.5312 14.8H11.4656C13.4912 14.8 14.8 13.4136 14.8 11.2672V4.7328C14.8 2.5864 13.4912 1.2 11.4672 1.2ZM7.9952 7.4C8.3264 7.4 8.5952 7.6688 8.5952 8V11.2C8.5952 11.5312 8.3264 11.8 7.9952 11.8C7.664 11.8 7.3952 11.5312 7.3952 11.2V8C7.3952 7.6688 7.664 7.4 7.9952 7.4ZM7.99912 4.16328C8.44152 4.16328 8.79912 4.52088 8.79912 4.96328C8.79912 5.40568 8.44152 5.76328 7.99912 5.76328C7.55672 5.76328 7.19512 5.40568 7.19512 4.96328C7.19512 4.52088 7.54952 4.16328 7.99112 4.16328H7.99912Z"
              fill="#A30000"
            />
          </svg>
          <span className="text-red-700 text-2xs leading-3 md:text-base font-medium">
          {t('customerInfo.warning')}
          </span>
        </div>
        <div className="mt-4 md:mt-6 flex flex-col gap-2 md:gap-4 max-w-[28rem]">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <FormInput
              itemClassName="!text-xs md:!text-base mt-1"
              label={t('customerInfo.label.firstName')}
              required
              className="flex-1"
            >
              <InputText
                className="!text-xs md:!text-sm !py-1.5 md:!py-2"
                value={entity.firstName}
                onChange={(e) => setEntityValue("firstName", e.target.value)}
              />
            </FormInput>
            <FormInput
              itemClassName="!text-xs md:!text-base mt-1"
              label={t('customerInfo.label.lastName')}
              required
              className="flex-1"
            >
              <InputText
                className="!text-xs md:!text-sm !py-1.5 md:!py-2"
                value={entity.lastName}
                onChange={(e) => setEntityValue("lastName", e.target.value)}
              />
            </FormInput>
          </div>
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('customerInfo.label.emailAddress')}
            required
            className="flex-1 max-w-[28rem]"
          >
            <InputText
              className="!text-xs md:!text-sm !py-1.5 md:!py-2"
              value={entity.email}
              checkEmail={true}
              onChange={(e) => setEntityValue("email", e.target.value)}
            />
          </FormInput>
          <p className="text-2xs md:text-sm">
          {t('customerInfo.note.note1')}
          </p>
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('customerInfo.label.emailAgain')}
            required
            className="flex-1 max-w-[28rem]"
          >
            <InputText
              className="!text-xs md:!text-sm !py-1.5 md:!py-2"
              onChange={(e) => setEntityValue("confirmEmail", e.target.value)}
              checkEmail={true}
              email={entity.email}
            />
          </FormInput>
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('customerInfo.label.region')}
            required
            className="relative max-w-[24rem]"
          >
            <SelectCountry
              className="!text-xs md:!text-sm !py-1.5 md:!py-2"
              onChange={(e) => {
                setEntityValue("region", e.target.value);
              }}
            />
          </FormInput>
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('customerInfo.label.numberPhone')}
            required
            className="relative max-w-[24rem]"
          >
            <InputPhone
              itemClassName="!text-xs md:!text-sm !py-1.5 md:!py-2"
              value={entity.phone}
              onChange={(val) => setEntityValue("phone", val)}
            />
          </FormInput>
          <p className="text-2xs md:text-sm">
          {t('customerInfo.note.note2')}
          </p>
        </div>
      </BookingCard>
    </div>
  );
}
