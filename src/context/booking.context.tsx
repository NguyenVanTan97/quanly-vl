import { createContext, useContext, useState } from "react";
interface RoomTypeEntity {
  title: string;
}
export interface IBookingForm {
  checkin?: Date;
  checkout?: Date;
  numberOfRoom?: number;
  roomType?: RoomTypeEntity;
  adults?: number;
  childrens?: number;
  rentalHours?: number;
  rentalType?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  confirmEmail?: string;
  phone?: string;
  region?: string;
  specifiedRequest?: string;
  estimatedCheckin?: string;
  price?: number;
  totalNights?: number;
}
export interface IBookingContext {
  entity: IBookingForm;
  setEntityValue: (name: keyof IBookingForm, value: any) => void;
}

export const BookingContext = createContext<IBookingContext>({} as any);
export function BookingProvider(props: React.PropsWithChildren) {
  const [entity, setEntity] = useState<IBookingForm>({});
  const setEntityValue = (name: keyof IBookingForm, value: any) => {
    setEntity((entity) => ({
      ...entity,
      [name]: value,
    }));
  };
  return (
    <BookingContext.Provider value={{ entity, setEntityValue }}>
      {props.children}
    </BookingContext.Provider>
  );
}

export function useBookingContext() {
  return useContext(BookingContext);
}
