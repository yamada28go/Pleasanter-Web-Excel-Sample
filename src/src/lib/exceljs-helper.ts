import { Workbook, Worksheet } from "exceljs";

/**
 * @abstract リンクを作成して指定されたワークブックをダウンロードする
 * @param workbook
 * @param filename
 */
export async function createAndDownloadExcelFile(
  workbook: Workbook,
  filename: string
) {
  const writeBuffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([writeBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export interface ReplaceTextInSheetResult {
  rowNumber: number;
  colNumber: number;
}

/**
 * @abstract 指定されたワークブックに対して、指定された文字列を置換する
 *
 * @param worksheet
 * @param searchText
 * @param replaceText
 */
export function replaceTextInSheet(
  worksheet: Worksheet,
  searchText: string,
  replaceText: string,
  fullReplacement: boolean = false
): ReplaceTextInSheetResult[] {
  var retA = new Array<ReplaceTextInSheetResult>();

  worksheet.eachRow({ includeEmpty: true }, (row, rowNumber) => {
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      if (cell.text.includes(searchText)) {
        // セルに特定の文字列が含まれているか確認
        cell.value = cell.text.replace(searchText, replaceText); // 文字列を置換
        retA.push({
          rowNumber,
          colNumber,
        });
        if (false === fullReplacement) {
          return retA;
        }
      }
    });
  });

  return retA;
}
