import { Select, SelectAttributes } from "../../Form/Select";
import { countries } from "./data";

export function SelectCountry(props: SelectAttributes) {
 return (
  <Select {...props} className={`pl-2 w-full ${props.className || ""}`}>
   {countries.map((country) => (
    <option key={country.code}>{country.name}</option>
   ))}
  </Select>
 );
}
