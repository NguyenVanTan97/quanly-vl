import Link from "next/link";

export const Header = (props: { dark?: boolean }) => {
  return (
    <div className="  z-20 w-full absolute top-0  py-2 md:py-8 bg-[#9A2C73]">
      <div className="flex flex-row gap-0 justify-around my-5 md:my-0 container mx-auto px-4 w-full items-center">
        <div className="flex justify-between gap-x-8 items-center ">
          <div className="flex gap-x-8 text-white text-sm font-semibold  uppercase">
            <Link href="/">Quản lý</Link>
            <Link href="/them-moi">Thêm mới</Link>
            {/* <Link href="/about">{t("about")}</Link> */}
            <Link href="/booking">Thống kê</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
