const XLSX = require('xlsx');
const path = require('path');

class ExcelReader {
  static readExcel(fileName, sheetName = 0) {
    const filePath = path.join(__dirname, '../test-data', fileName);
    const workbook = XLSX.readFile(filePath);
    const actualSheetName =
      typeof sheetName === 'number'
        ? workbook.SheetNames[sheetName]
        : sheetName;

    if (!actualSheetName) {
      throw new Error(`Sheet index ${sheetName} not found in ${fileName}. Available: ${workbook.SheetNames.join(', ')}`);
    }

    const sheet = workbook.Sheets[actualSheetName];

    if (!sheet) {
      throw new Error(`Sheet "${actualSheetName}" not found in ${fileName}. Available: ${workbook.SheetNames.join(', ')}`);
    }

    return XLSX.utils.sheet_to_json(sheet, { defval: '' });
  }

  static getRowByTestCase(fileName, testCaseName, sheetName = 0) {
    const rows = this.readExcel(fileName, sheetName);
    const row = rows.find(
      (row) =>
        String(row.TestCase || '').trim().toLowerCase() === String(testCaseName).trim().toLowerCase()
    );

    if (!row) {
      throw new Error(`Test case "${testCaseName}" not found in ${fileName}`);
    }

    return row;
  }
}

module.exports = ExcelReader;