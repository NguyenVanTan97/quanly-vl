import axios from "axios";
class GoogleSheetService {
  constructor() {}

  async readGoogleSheet(urlExcel: string, range: string): Promise<{}[]> {
    let data: {}[] = [];
    const url = `${urlExcel}/export?format=csv&${range}`;
    const res = await axios.get(url);
    
    const titles = res.data.split("\n")[0].split(",");
    
    for (let i = 1; i < res.data.split("\n").length; i++) {
      const row = res.data.split("\n")[i].split(",");
      const obj: { [key: string]: any } = {};
      for (let j = 0; j < titles.length; j++) {
        obj[titles[j].replace("\r", "")] = row[j]?.replace("\r", "").replace('"', "");
      }
      data.push(obj);
    }
    return data;
  }
}

export const googleSheetService = new GoogleSheetService();
