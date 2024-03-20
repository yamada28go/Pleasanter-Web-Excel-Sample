import { Workbook } from "exceljs";
import {
  createAndDownloadExcelFile,
  replaceTextInSheet,
} from "./lib/exceljs-helper";
import { apiGetAttachmentsDataAsync } from "@yamada28go/pleasanter-web-script-type-helper";
import { テンプレートファイルService } from "./Generated/Services/テンプレートファイルService";
import { データレコードService } from "./Generated/Services/データレコードService";

// 置換対象のテンプレートファイルID
// pleasanterに添付ファイルとして保存されている想定
const TemplateFileID = 5228;

// エクセルデータを作成する
export async function makeExcelMain() {
  // Excelテンプレートファイルを読み込む
  const templateFile = await getTemplateFile(TemplateFileID);

  // ワークシートを読み込む
  const workbook = await new Workbook().xlsx.load(templateFile);

  // 指定されたシートを取得
  const worksheet = workbook.getWorksheet("Sheet1");
  if (worksheet) {
    //pleasanterから置換対象データを読み取る
    var dataStr = await getTargetData();

    // テンプレート内部の指定文字列を置換していく
    replaceTextInSheet(worksheet, "置換対象データ", dataStr);

    // 加工後のファイルをBlobとして保存し、ダウンロードさせる
    await createAndDownloadExcelFile(
      workbook,
      `outFile_${formatDateTime()}.xlsx`
    );

    return;
  }

  throw new Error("帳票作成処理に失敗しました。");
}

// 添付ファイルからテンプレートファイルを読み込む
async function getTemplateFile(templateFileId: number) {
  // サービスを構築
  const s = new テンプレートファイルService();
  // pleasanterに登録されたテンプレートファイルを取得する(アイテムのIDは直接的に指定する)
  const data = await s.apiGet(templateFileId);

  // テンプレートファイルを取得
  const templateInfo = data.テンプレートファイル;
  if (templateInfo) {
    // テンプレートファイルの実態を取得する
    const templateFile = await apiGetAttachmentsDataAsync(templateInfo[0]);
    return templateFile;
  }

  throw new Error("テンプレートファイルが読み取れません");
}

//置換対象のデータを取得する
async function getTargetData() {
  //全レコードを取ってきて、合計を出力する
  const s = new データレコードService();
  const xxx = await s.findItem({
    View: {
      Incomplete: undefined,
      Own: undefined,
      NearCompletionTime: undefined,
      Delay: undefined,
      Overdue: undefined,
      Search: undefined,
      ColumnFilterHash: undefined,
      ColumnSorterHash: undefined,
    },
  });

  // 文字列はまとめる
  const rl = xxx.map((x) => x.置換用データ);
  return rl.join(";");
}

// --- 日付補助

// 現在の日付を取得する
function formatDateTime(date: Date = new Date()) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");

  return `${year}${month}${day}${hour}${minute}${second}`;
}
