/**
 *
 * [注意]
 *  自動生成されたコードです。
 *  変更時には十分注意して変更してください。
 *
 *  [生成コマンド]
 *  https://github.com/yamada28go/HackPleasanterApiCli
 *
 *  [生成元テンプレートファイル]
 *  https://github.com/yamada28go/HackPleasanterApi.pleasanter-web-script
 *
 *  [動作に必用なライブラリ]
 *  https://www.npmjs.com/package/@yamada28go/pleasanter-web-script-type-helper
 *
 */
import { PleasanterDate } from "@yamada28go/pleasanter-web-script-type-helper";

export class テンプレートファイルModel {
  public constructor(public _rawData: RecordDataItems) {}

  get テンプレートファイル(): AttachmentsData[] | undefined {
    return this._rawData?.AttachmentsHash?.AttachmentsA;
  }

  set テンプレートファイル(value: AttachmentsData[] | undefined) {
    const tv = this._rawData.AttachmentsHash || {};
    tv.AttachmentsA = value;
  }
}
