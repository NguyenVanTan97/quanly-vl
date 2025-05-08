import { useEffect, useState } from "react";
import { useBookingContext } from "../../../context/booking.context";
import { DatePicker, convertDate } from "../../Form/DatePicker";
import { FormInput } from "../../Form/FormInput";
import { Select } from "../../Form/Select";
import { BookingCard } from "../Card";
import { BookingTitle } from "../Title";
import { RadioGroup } from "./RadioGroup";
import { SelectCustomer } from "./SelectCustomer";
import { useTranslation } from "react-i18next";

export function AccomodationInfo() {
  const { t } = useTranslation("booking");
  const { entity, setEntityValue } = useBookingContext();
  const [rentalType, setRentalType] = useState<string>("day");
  const [totalNights, setTotalNights] = useState<string>("");
  const [hours, setHours] = useState<number[]>([]);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEntityValue("rentalType", e.target.value);
    if (e.target.value === "day") {
      setEntityValue("rentalHours", null);
    }
    setRentalType(e.target.value);
  };

  useEffect(() => {
    const numbers = [];
    for (let i = 1; i <= 23; i++) {
      numbers.push(i);
    }
    setHours(numbers);
  }, []);

  const ChangePeriod = (checkin: Date | undefined, checkout: Date | null) => {
    if (checkin && checkout) {
      const millisecondsPerDay = 24 * 60 * 60 * 1000;
      const totalMilliseconds = Math.abs(
        checkout.getTime() - checkin.getTime()
      );
      const totalNights = Math.floor(totalMilliseconds / millisecondsPerDay);

      // set khoảng thời gian thuê phòng
      setEntityValue("totalNights", totalNights);
      setTotalNights(totalNights + " ");
    }
  };

  const ChangeDateCheckout = (value: Date) => {
    // set giá trị mặc định cho ngày checkout sau khi chọn ngày checkin
    // checkout = checkin + 1 ngày
    if (value) {
      setEntityValue("checkin", value);
      let date = convertDate(value);
      // số ngày của một tháng
      const numberDay = new Date(date.year, date.month, 0).getDate();

      if (date.day + 1 <= numberDay) {
        // nếu ngày checkin không phải là ngày cuối tháng
        // thì ngày checkout được công thêm 1
        date.day += 1;
      } else {
        // nếu ngày checkin là ngày cuối tháng
        // thì ngày checkout sẽ là 1
        // và tháng sẽ được + 1
        date.day = 1;
        if (date.month + 1 <= 12) {
          date.month += 1;
        } else {
          // nếu ngày checkin là ngày cuối tháng của cuối năm
          // thì ngày checkout sẽ là 1
          // và tháng sẽ là 1
          // và năm + 1
          date.month = 1;
          date.year += 1;
        }
      }

      const dateCheckout = new Date(`${date.month}/${date.day}/${date.year}`);

      if (dateCheckout) {
        setEntityValue("checkout", dateCheckout);
        setMinDate(dateCheckout);
        ChangePeriod(value, dateCheckout);
      }
    }
  };

  return (
    <div>
      <BookingTitle
        className="!text-base md:!text-xl"
        title={t('accomodationInfo.title')}
        gradient
      />
      <BookingCard border>
        <RadioGroup
          className="mb-2"
          handleRadioChange={handleRadioChange}
          checked={rentalType}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('accomodationInfo.checkIn')}
            required
          >
            <DatePicker
              itemClassName="!text-xs md:!text-base !py-2 md:!py-2"
              value={entity.checkin}
              onChange={(val) => {
                if (val) {
                  ChangeDateCheckout(val);
                }
              }}
            />
          </FormInput>
          {rentalType === "day" ? (
            <FormInput
              itemClassName="!text-xs md:!text-base mt-1"
              label={t('accomodationInfo.checkOut')}
              totalNights={totalNights}
              required
            >
              <DatePicker
                minDate={minDate}
                itemClassName="!text-xs md:!text-base !py-2 md:!py-2"
                value={entity.checkout}
                onChange={(val) => {
                  setEntityValue("checkout", val);
                  ChangePeriod(entity.checkin, val);
                }}
              />
            </FormInput>
          ) : (
            <FormInput
              itemClassName="!text-xs md:!text-base mt-1"
              label="Theo giờ"
              classNameContent="relative"
              required
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
              <Select
                className="pl-10 w-full !py-2 md:!py-2.5"
                onChange={(e) => {
                  setEntityValue("rentalHours", e.target.value);
                }}
              >
                <option key={"default"} value={""}>
                {t('accomodationInfo.placeholder.chooseATime')}
                </option>
                {hours.map((h) => {
                  return (
                    <option key={h} value={h}>
                      {h} {t('accomodationInfo.placeholder.hour')}
                    </option>
                  );
                })}
              </Select>
            </FormInput>
          )}
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('accomodationInfo.roomNumber')}
            classNameContent="relative"
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
            <Select
              className="pl-10 w-full "
              value={entity.numberOfRoom}
              onChange={(e) => {
                setEntityValue("numberOfRoom", e.target.value);
              }}
            >
              <option value={""}>{t('accomodationInfo.placeholder.chooseARoom')}</option>
              <option value={1}>1 {t('accomodationInfo.placeholder.room')}</option>
              <option value={2}>2 {t('accomodationInfo.placeholder.room')}</option>
              <option value={3}>3 {t('accomodationInfo.placeholder.room')}</option>
            </Select>
          </FormInput>
          <FormInput
            itemClassName="!text-xs md:!text-base mt-1"
            label={t('accomodationInfo.kindOfRoom')}
            classNameContent="relative"
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
            <Select className="pl-10 disabled:opacity-60 w-full" disabled>
              <option>{t('accomodationInfo.placeholder.roomFor')}</option>
            </Select>
          </FormInput>
          <FormInput itemClassName="!text-xs md:!text-base mt-1" label={t('accomodationInfo.guest')}>
            <SelectCustomer
              totalParentsChange={(val: number) => {
                setEntityValue("adults", val);
              }}
              totalChildrentsChange={(val: number) => {
                setEntityValue("childrens", val);
              }}
              placeholder={t('accomodationInfo.placeholder.guests')}
            />
          </FormInput>
        </div>
      </BookingCard>
    </div>
  );
}
