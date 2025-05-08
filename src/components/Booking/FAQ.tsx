import Image from "next/image";
import { Button } from "../Button";
import { BookingCard } from "./Card";
import { BookingTitle } from "./Title";
import { useEffect, useState } from "react";
import { googleSheetService } from "@/shared/services/GoogleSheet.service";
import { environment } from "@/environments/environtment";
import { useMainContext } from "@/context/main.context";
import { NoIcon } from "../Form/InputText";
import { useTranslation } from "react-i18next";

interface IQaEntity {
  question?: string;
  questionVN?: string;
  questionEN?: string;
  answer?: string;
  answerVN?: string;
  answerEN?: string;
}

export function FAQ(props: { className?: string }) {
  // const { language } = useMainContext();
  const [listQA, setListQA] = useState<IQaEntity[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { t } = useTranslation("booking");

  // useEffect(() => {
  //   googleSheetService
  //     .readGoogleSheet(environment.excel.Url, environment.excel.range.QA)
  //     .then((data) => {
  //       let arr: Array<IQaEntity> = [];

  //       if (language === "VN") {
  //         arr = (data as Array<IQaEntity>).map((row) => ({
  //           ...row,
  //           answer: row.answerVN,
  //           question: row.questionVN,
  //         }));
  //       } else {
  //         arr = (data as Array<IQaEntity>).map((row) => ({
  //           ...row,
  //           answer: row.answerEN,
  //           question: row.questionEN,
  //         }));
  //       }
  //       setListQA(arr);
  //     });
  // }, [language]);

  return (
    <div className={props.className}>
      <BookingTitle className="hidden md:block" title={t("FAQ.title")} />
      <p className="text-2xs md:text-sm">{t("FAQ.content")}</p>
      <div className="mt-4 flex flex-col gap-y-4">
        {listQA.map((item, index) => {
          return index < 3 && <FAQItem key={index} QA={item} />;
        })}

        <div className="md:text-right text-xs md:block flex flex-col ">
          {listQA.length > 3 && (
            <Button
              className="py-2 md:py-1"
              onClick={() => {
                setOpenDialog(true);
              }}
            >
              {t("FAQ.more")} ({listQA.length})
            </Button>
          )}
        </div>
      </div>
      <Dialog
        listQA={listQA}
        open={openDialog}
        onChange={(val: boolean) => {
          setOpenDialog(val);
        }}
      />
    </div>
  );
}

function FAQItem(props: { QA: IQaEntity }) {
  return (
    <BookingCard>
      <div className="flex flex-col gap-y-4 text-xs md:text-sm">
        <div className="flex gap-x-4  items-center">
          <Image src="/images/faq/person.png" height={25} width={25} alt="" />
          <p className="font-medium">{props.QA.question}</p>
        </div>
        <div className="flex gap-x-4 items-center">
          <Image src="/images/faq/message.png" height={25} width={25} alt="" />

          <p className="">{props.QA.answer}</p>
        </div>
      </div>
    </BookingCard>
  );
}

function Dialog(props: {
  open: boolean;
  listQA: IQaEntity[];
  onChange: (val: boolean) => void;
}) {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation("booking");

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <>
      {open === true && (
        <div className="fixed w-screen h-screen bg-black/25 flex items-center justify-center top-0 right-0 z-20">
          <div className="h-screen md:h-[80vh] w-screen md:w-1/2 bg-white rounded-md shadow-md">
            <div className="flex justify-between px-5 pt-4 pb-2 border-b border-solid items-center">
              <h1 className="font-semibold">{t("FAQ.title")}</h1>
              <a
                className="cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  props.onChange(false);
                }}
              >
                <NoIcon />
              </a>
            </div>
            <div className="overflow-y-auto h-[calc(100%-49px)] p-4 flex flex-col gap-4">
              {props.listQA.map((item, index) => {
                return <FAQItem key={index} QA={item} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
