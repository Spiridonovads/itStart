import * as XLSX from "xlsx";

export const readExcelFile = async (url: string): Promise<any[]> => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const data = new Uint8Array(arrayBuffer);
  const workbook = XLSX.read(data, { type: "array" });
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  const range = XLSX.utils.decode_range(worksheet['!ref'] || '');
  range.e.c = Math.min(range.e.c, 4);
  worksheet['!ref'] = XLSX.utils.encode_range(range);

  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  const filteredData = jsonData.map((row: any) => {
    const filteredRow: any = {};
    Object.keys(row).slice(0, 5).forEach(key => {
      filteredRow[key] = row[key];
    });
    return filteredRow;
  });

  return filteredData;
};
