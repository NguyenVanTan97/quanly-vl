export class ShareService {
  constructor() {}
  formatNumber = (value: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };
}

export const shareService = new ShareService();
