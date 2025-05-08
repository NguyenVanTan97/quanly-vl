export class DateFormat {
 private static formater = new Intl.DateTimeFormat(["ban", "id"]);
 private static formaterTime = new Intl.DateTimeFormat(["ban", "id"], {
  timeStyle: "short",
  dateStyle: "short",
 });
 static formatDateTime(date: Date) {
  return this.formaterTime.format(date);
 }
 static formatDate(date: Date) {
  return this.formater.format(date);
 }
}
