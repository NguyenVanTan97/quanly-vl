import { Children, PropsWithChildren } from "react";
import { AccomodationInfo } from "../components/Booking/AccomodationInfo";
import { CancelationCost } from "../components/Booking/CancelationCost";
import { CustomerInfo } from "../components/Booking/CustomerInfo";
import { EstimatedCheckin } from "../components/Booking/EstimatedCheckin";
import { FAQ } from "../components/Booking/FAQ";
import { GeneralRule } from "../components/Booking/GeneralRule";
import { PriceSummary } from "../components/Booking/PriceSummary";
import { Request } from "../components/Booking/Request";
import { RoomInfo } from "../components/Booking/RoomInfo";
import { Button } from "../components/Button";
import { BookingProvider, useBookingContext } from "../context/booking.context";
import { DateFormat } from "../core/util/DateFormat";
import { Footer } from "../layouts/Footer";
import { Head } from "../layouts/head";
import { Header } from "../layouts/Header";
import { useTranslation } from "react-i18next";
// import "./collapse.css";

export default function BookingPage() {
  const { t } = useTranslation("booking");
  return (
    <BookingProvider>
      <Head />
      <Header dark />
      <main>
        <div className="w-full gradient h-40 md:h-24 "></div>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 py-6 gap-6">
          <div className=" lg:col-span-2 flex gap-6 flex-col">
            <RoomInfo className="block md:hidden -mx-4 md:mx-0" />
            <AccomodationInfo />
            <CustomerInfo />
            <Request />
            <EstimatedCheckin />
            <GeneralRule className="hidden md:block" />
            <div className="hidden lg:block">
              <GroupSubmitButton />
            </div>
          </div>
          <div className="flex gap-4 flex-col">
            <RoomInfo className="hidden md:block" />
            <PriceSummary className="-mx-4 md:mx-0" />
            <CancelationCost />
            <Collapse
              id="collapse-rule"
              title={t("mobile.rule")}
              className="block md:hidden "
            >
              <GeneralRule className="-mx-4 md:mx-0" />
            </Collapse>
            <Collapse
              id="collapse-faq"
              title={t("mobile.FAQ")}
              className="block md:hidden "
            >
              <FAQ className="-mx-2 md:mx-0" />
            </Collapse>
            <FAQ className="hidden md:block" />
          </div>
          <div className="lg:hidden">
            <GroupSubmitButton />
          </div>
        </div>
      </main>
      <Footer />
    </BookingProvider>
  );
}

function GroupSubmitButton() {
  const { entity } = useBookingContext();
  const { t } = useTranslation("booking");

  const validForm = (): boolean => {
    if (
      entity &&
      entity.checkin &&
      entity.firstName &&
      entity.firstName.length > 2 &&
      entity.lastName &&
      entity.lastName.length > 2 &&
      entity.email &&
      entity.confirmEmail &&
      entity.region &&
      entity.estimatedCheckin
    ) {
      let regex = /^[a-z0-9]{2,}@[a-z0-9]{2,}.[a-z]{2,}$/;
      return regex.test(entity.email) && entity.email === entity.confirmEmail
        ? entity.rentalType === "hours"
          ? entity.rentalHours
            ? true
            : false
          : true
        : false;
    } else {
      return false;
    }
  };

  const handleClick = () => {
    if (validForm()) {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwfke86k6QizypsrS-UJIbpVMcIqM2Vc3Ct33mum7ScjHdkwX0HSFspu1Xaq_7i6KT3/exec";
      const form = new FormData();
      form.append(
        "Checkin",
        entity.checkin ? DateFormat.formatDateTime(entity.checkin) : ""
      );
      form.append(
        "Checkout",
        entity.checkout ? DateFormat.formatDateTime(entity.checkout) : ""
      );
      form.append(
        "Number of rooms",
        entity.numberOfRoom ? entity.numberOfRoom + "" : ""
      );
      form.append("Room type", entity.roomType ? entity.roomType.title : "");
      form.append("Adults", entity.adults ? entity.adults + "" : "");
      form.append("Childrens", entity.childrens ? entity.childrens + "" : "");
      form.append(
        "Rental hours",
        entity.rentalHours ? entity.rentalHours + "" : ""
      );
      form.append("Firstname", entity.firstName ? entity.firstName + "" : "");
      form.append("Lastname", entity.lastName ? entity.lastName + "" : "");
      form.append("Email", entity.email ? entity.email + "" : "");
      form.append("Region", entity.region ? entity.region + "" : "");
      form.append("Phone", entity.phone ? entity.phone + "" : "");
      form.append(
        "Specified request",
        entity.specifiedRequest ? entity.specifiedRequest + "" : ""
      );
      form.append(
        "Estimated checkin",
        entity.estimatedCheckin ? entity.estimatedCheckin : ""
      );
      form.append("Price", entity.price ? entity.price + "" : "");
      fetch(scriptURL, { method: "POST", body: form })
        .then((response) => console.log("Success!", response))
        .catch((error) => console.error("Error!", error.message));
    } else {
      alert("Thông tin chưa đúng, vui lòng kiểm tra lại");
    }
  };

  return (
    <div className="flex justify-end text-xs flex-col md:flex-row gap-4 md:gap-x-2">
      {/* <Button className="py-2 md:py-1" gradientText>
        Kiểm tra lại đặt phòng
      </Button> */}
      <Button className="py-2 md:py-1" color="primary" onClick={handleClick}>
        {t("submit")}
      </Button>
    </div>
  );
}

function Collapse(
  props: PropsWithChildren & { title: string; className?: string; id: string }
) {
  return (
    <div className={`collapse-box relative ${props.className}`}>
      <input className="collapse-checkbox" type="checkbox" id={props.id} />
      <div className="absolute top-2 right-2 collapse-icon">
        <ArrowIcon />
      </div>
      <label htmlFor={props.id} className="collapse-header">
        <div className="flex justify-between text-base">{props.title}</div>
      </label>
      <div className="collapse-content">{props.children}</div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="13"
      height="7"
      viewBox="0 0 13 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.180905 0.180905C0.400183 -0.0383737 0.743318 -0.0583081 0.985116 0.121101L1.05439 0.180905L6.38235 5.50859L11.7103 0.180904C11.9296 -0.0383742 12.2727 -0.0583086 12.5145 0.121101L12.5838 0.180904C12.8031 0.400182 12.823 0.743317 12.6436 0.985115L12.5838 1.05439L6.8191 6.81909C6.59982 7.03837 6.25668 7.05831 6.01488 6.8789L5.94561 6.81909L0.180905 1.05439C-0.0603015 0.813183 -0.0603015 0.422111 0.180905 0.180905Z"
        fill="black"
      />
    </svg>
  );
}
