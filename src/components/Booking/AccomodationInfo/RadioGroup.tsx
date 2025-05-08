import React from "react";
import { useTranslation } from "react-i18next";
export function RadioGroup(props: {
  className?: string;
  checked?: string;
  handleRadioChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const {t}= useTranslation('booking')
  return (
    <div className={`flex gap-4 ${props.className}`}>
      <RadioItem
        title={t('accomodationInfo.radio.labelDay')}
        checked={props.checked}
        value="day"
        onChange={props.handleRadioChange}
      />
      <RadioItem
        title={t('accomodationInfo.radio.labelHour')}
        checked={props.checked}
        value="hours"
        onChange={props.handleRadioChange}
      />
    </div>
  );
}

function RadioItem(props: {
  title: string;
  checked?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label>
      <input
        type="radio"
        value={props.value}
        name="time"
        checked={props.checked === props.value}
        onChange={props.onChange}
      />
      <span> {props.title}</span>
    </label>
  );
}
