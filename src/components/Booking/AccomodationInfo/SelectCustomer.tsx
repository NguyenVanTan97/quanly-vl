import React, { useRef, useEffect, useState } from "react";

export function SelectCustomer(props: {
  placeholder?: string;
  totalParentsChange: (value: number) => void;
  totalChildrentsChange: (value: number) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [totalParents, setTotalParents] = useState<number>(0);
  const [totalChildrents, setTotalChildrents] = useState<number>(0);
  const [value, setValue] = useState<string>("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.placeholder) {
      setValue(props.placeholder);
    }
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // nếu click ra ngoài div select thì tắt option
        setOpen(false);
      } else {
        // nếu click vào div select thì mở option
        setOpen(true);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, props.placeholder]);

  const HandleSubmit = () => {
    setOpen(false);
  };

  return (
    <div
      ref={ref}
      className="relative outline-none border border-cgray px-4 py-2 text-sm md:text-sm bg-transparent"
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-4">
        <svg
          width="14"
          height="17"
          viewBox="0 0 14 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.54397 10.3481L6.64292 10.3481L6.86221 10.3487C8.72475 10.3586 13.0879 10.5279 13.0879 13.4061C13.0879 16.0746 9.5045 16.4312 6.71711 16.4447L6.22572 16.4445C4.36319 16.4345 0 16.2652 0 13.3878C0 10.6629 3.73431 10.3481 6.54397 10.3481ZM6.54397 11.5942C3.02898 11.5942 1.24615 12.1982 1.24615 13.3878C1.24615 14.5891 3.02898 15.1989 6.54397 15.1989C10.059 15.1989 11.8418 14.595 11.8418 13.4061C11.8418 12.2032 10.059 11.5942 6.54397 11.5942ZM6.54397 0C8.98062 0 10.962 1.98222 10.962 4.41803C10.962 6.85385 8.98062 8.83606 6.54397 8.83606H6.51822C5.33935 8.83191 4.23443 8.36917 3.40615 7.53508C2.57705 6.70015 2.12262 5.59191 2.12674 4.41554C2.12674 1.98222 4.10815 0 6.54397 0ZM6.54397 1.24615C4.79603 1.24615 3.3729 2.66926 3.3729 4.41803C3.3696 5.26459 3.69526 6.05797 4.28926 6.65695C4.88409 7.25511 5.67665 7.58659 6.52071 7.58991L6.54397 8.20551V7.58991C8.29274 7.58991 9.71585 6.1668 9.71585 4.41803C9.71585 2.66926 8.29274 1.24615 6.54397 1.24615Z"
            fill="#BABABA"
          />
        </svg>
      </div>
      <span className="pl-7 text-xs md:text-sm">{value || ""}</span>
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <svg
          className={open ? "transform rotate-180" : ""}
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
      </div>

      {open && (
        <div className="bg-[#F9F9F9] shadow-md border border-primary  w-full  absolute right-0 top-8 md:top-9 p-4 md:px-6 md:py-5 z-10">
          <OptionItem
            onChange={(val: number) => {
              setTotalParents(val);
              setValue(`${val} người lớn ${totalChildrents} trẻ em`);
              props.totalParentsChange(val);
            }}
            title="Người lớn"
            describe="Từ 12 tuổi"
          />
          <OptionItem
            onChange={(val: number) => {
              setTotalChildrents(val);
              setValue(`${totalParents} người lớn ${val} trẻ em`)
              props.totalChildrentsChange(val);
            }}
            title="Trẻ em"
            describe="Dưới 12 tuổi"
          />
          <button
            className="float-right text-primary font-bold text-sm md:text-base"
            onClick={HandleSubmit}
          >
            Xong
          </button>
        </div>
      )}
    </div>
  );
}

function OptionItem(props: {
  title: string;
  describe: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex justify-between pb-2">
      <div className="flex flex-col ">
        <h1 className="text-xs md:text-sm font-bold">{props.title}</h1>
        <span className="text-2xs">({props.describe})</span>
      </div>
      <ActionCount onChange={props.onChange} />
    </div>
  );
}

function ActionCount(props: { onChange: (value: number) => void }) {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="flex items-center">
      <SubtractionIcon
        onClick={() => {
          if (count > 0) {
            props.onChange(count - 1);
            setCount(count - 1);
          }
        }}
      />
      <input
        className="w-7 mx-2 bg-[#F9F9F9]  border-b text-center text-sm nd:text-base font-semibold"
        value={count}
      />
      <SummationIcon
        onClick={() => {
          props.onChange(count + 1);
          setCount(count + 1);
        }}
      />
    </div>
  );
}

function SubtractionIcon(props: {
  onClick: (event: React.MouseEvent) => void;
}) {
  return (
    <svg
      onClick={props.onClick}
      className="cursor-pointer mt-[1px]"
      width="12"
      height="4"
      viewBox="0 0 7 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.368 2.408V0.416H6.824V2.408H0.368Z"
        fill="url(#paint0_linear_755_1440)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_755_1440"
          x1="-1"
          y1="9.00001"
          x2="8.72455"
          y2="9.00001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#782671" />
          <stop offset="1" stop-color="#9A2065" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SummationIcon(props: { onClick: (event: React.MouseEvent) => void }) {
  return (
    <svg
      onClick={props.onClick}
      className="cursor-pointer"
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.976 10.856V0.344H6.992V10.856H4.976ZM0.608 6.56V4.664H11.36V6.56H0.608Z"
        fill="url(#paint0_linear_755_1445)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_755_1445"
          x1="-1"
          y1="20"
          x2="12.6144"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#782671" />
          <stop offset="1" stop-color="#9A2065" />
        </linearGradient>
      </defs>
    </svg>
  );
}
