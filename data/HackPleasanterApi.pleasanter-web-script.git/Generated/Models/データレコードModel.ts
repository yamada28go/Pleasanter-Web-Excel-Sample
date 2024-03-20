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

export class データレコードModel {
  public constructor(public _rawData: RecordDataItems) {}

  get 置換用データ(): string | undefined {
    return this._rawData?.ClassHash?.ClassA;
  }

  set 置換用データ(value: string | undefined) {
    const tv = this._rawData.ClassHash || {};
    tv.ClassA = value;
  }
}

// 項目の検索選択肢
export const enum 置換用データ_Choices {}

// 項目の検索選択肢
export function toString_置換用データ(value: 置換用データ_Choices) {
  switch (value) {
  }

  return "Error";
}
