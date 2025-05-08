import Image from "next/image";

export function Partners() {
 return (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
   <Image
    className="self-center justify-self-center w-16 md:w-24"
    width={0}
    height={0}
    src="/images/partners/booking.com.svg"
    alt="Booking.com"
   />
   <Image
    className="self-center justify-self-center w-16 md:w-24"
    src="/images/partners/expedia.svg"
    width={0}
    height={0}
    alt="Booking.com"
   />
   <Image
    className="self-center justify-self-center w-16 md:w-24"
    src="/images/partners/airbnb.svg"
    width={0}
    height={0}
    alt="Booking.com"
   />
   <Image
    className="self-center justify-self-center w-16 md:w-24"
    src="/images/partners/traveloka.svg"
    width={0}
    height={0}
    alt="Booking.com"
   />
   <Image
    className="self-center justify-self-center w-16 md:w-24"
    src="/images/partners/vntrip.svg"
    width={0}
    height={0}
    alt="Booking.com"
   />
   <Image
    className="self-center justify-self-center w-16 md:w-24"
    src="/images/partners/agoda.svg"
    width={0}
    height={0}
    alt="Booking.com"
   />
  </div>
 );
}
