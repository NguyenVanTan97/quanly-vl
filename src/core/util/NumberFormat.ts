export class NumberFormat {
  private static formater = new Intl.NumberFormat("vi-VN", {
    style: "decimal",
  });

  static format(value: number, unit: string) {
    if (unit === "VND") {
      return this.numberFormatter(value, 1);
    } else {
      return this.formater.format(value);
    }
  }

  private static numberFormatter(num: any, digits: number) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: " nghìn" },
      { value: 1e6, symbol: " triệu" },
      { value: 1e9, symbol: " tỷ" },
      { value: 1e12, symbol: " nghìn tỷ" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }
}
