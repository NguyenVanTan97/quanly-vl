import { BookingProvider } from "@/context/booking.context";
import { Head } from "@/layouts/head";
import { Header } from "@/layouts/Header";

export default function ThemMoi() {
  return (
    <BookingProvider>
      <Head />
      <Header />
      <main>
        <div className="w-full  h-40 md:h-24 ">Them moi</div>
      </main>
    </BookingProvider>
  );
}
