import { TableVatLieu } from "@/components/quanLy/quanLy";
import { Head } from "../layouts/head";
import { Header } from "../layouts/Header";

export default function QuanLy() {
  return (
    <>
      <Head />
      <Header />
      <main>
        <TableVatLieu />
      </main>
    </>
  );
}
