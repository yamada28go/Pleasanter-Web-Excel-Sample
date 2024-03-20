import { makeExcelMain } from "./makeExcel";

// エクスポートボタンを追加する
export function makeExportButton() {
  // ボタン要素を作成
  const button = document.createElement("button");
  button.id = "OpenExportExcelCommand";
  button.className =
    "button button-icon ui-button ui-corner-all ui-widget applied";
  button.type = "button";
  button.addEventListener("click", onClickExport);
  button.setAttribute("data-icon", "ui-icon-arrowreturnthick-1-w");

  // アイコン要素を作成してボタンに追加
  const icon = document.createElement("span");
  icon.className = "ui-button-icon ui-icon ui-icon-arrowreturnthick-1-w";
  button.appendChild(icon);

  // アイコンとテキストの間にスペースを挿入
  const iconSpace = document.createElement("span");
  iconSpace.className = "ui-button-icon-space";
  iconSpace.textContent = " ";
  button.appendChild(iconSpace);

  // ボタンのラベルテキストを追加
  const textNode = document.createTextNode("帳票出力");
  button.appendChild(textNode);

  // 作成したボタンをドキュメントに挿入
  document.getElementById("MainCommands")?.appendChild(button);
}

// エクスポートボタン押下時の処理
function onClickExport() {
  makeExcelMain()
    .then()
    .catch((exp) => {
      alert(`帳票作成処理に失敗しました。${exp}`);
    });
}
