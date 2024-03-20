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
import { HackPleasanterApi_ServiceBase } from "@yamada28go/pleasanter-web-script-type-helper";

import { Excel出力試験Model } from "../Models/Excel出力試験Model";

export class Excel出力試験Service extends HackPleasanterApi_ServiceBase<Excel出力試験Model> {
  /** サイトID */
  public static readonly SITE_ID_CONSTANT = 5224;

  // 対象としているサイトITを取得する
  override getSiteId(): number {
    return Excel出力試験Service.SITE_ID_CONSTANT;
  }

  override makeItemType(_rawData: RecordDataItems): Excel出力試験Model {
    return new Excel出力試験Model(_rawData);
  }
}
