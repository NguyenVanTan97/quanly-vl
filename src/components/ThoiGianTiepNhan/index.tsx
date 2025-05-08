import { useEffect, useState } from "react";

export function ThoiGianTiepNhan(props: { value?: string }) {
  const [isPeriod, setIsPeriod] = useState<boolean>(false);
  useEffect(() => {
    setIsPeriod(false);
  }, [props.value]);

  const Period = (): string => {
    if (props.value) {
      const oldDate = new Date(props.value);
      const nowDate = new Date();

      const diffTime = Math.abs(nowDate.getTime() - oldDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffTime / (1000 * 60 * 60 * 24) >= 1) {
        return diffDays + " ngày trước";
      } else {
        if (diffTime / (1000 * 60 * 60) >= 1) {
          const diffHours = Math.ceil(diffTime / (1000 * 60 * 60));
          return diffHours + " giờ trước";
        } else {
          const diffMinutes = Math.ceil(diffTime / (1000 * 60));
          return diffMinutes + " phút trước";
        }
      }
    } else {
      return "";
    }
  };

  return (
    <span
      className={"cursor-pointer "}
      onClick={() => {
        setIsPeriod(!isPeriod);
      }}
    >
      {isPeriod ? Period() : fullDateTime(props.value)}
    </span>
  );
}

export default ThoiGianTiepNhan;

const fullDateTime = (val?: string): string => {
  if (val) {
    const date = new Date(val);
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return time + " " + date.toLocaleDateString("vi-VN");
  } else {
    return "";
  }
};
