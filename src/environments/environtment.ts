export const environment = {
  defaultLanguge: "VN", // language type: Eng | VN
  defaultUnit: "VN", // unit type: Eng | $

  //chi phí hủy
  cancelationCost: {
    VND: 5000,
    USD: 300,
  },
  // số tiền đặt cọc
  depositAmount: {
    VND: 5000,
    USD: 300,
  },
  excel: {
    // Url dẫn tới google sheet, chứa nhiều sheet dữ liệu liên quan
    Url: "https://docs.google.com/spreadsheets/d/1igWJAmo4GZeK7o5rxHYab-Vvl9jUIng6HLc_ThmK2h0",

    range: {
      // range: vùng dữ liệu cần lấy của sheet
      // gid: gid id của sheet cần lấy
      vatLieuDien: "range=A1:H100&gid=0",
      vatLieuNuoc: "range=A1:H100&gid=634617362",
    },
  },
};

// nuoc: https://script.google.com/macros/s/AKfycbxbSSnhONLb38YvQFtfkAHBkLMJowzRbyCMAkF78l8E41cYh7K8oKrs9oPAHQTR4lnM/exec
// dien: https://script.google.com/macros/s/AKfycby-zQjxPp16p6rSME38XAC-LpJyp7cSjAdhY1Zu9twbFKoYICP6CTs1shWfQsSlxE8H/exec
