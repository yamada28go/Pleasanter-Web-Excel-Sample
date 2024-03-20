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

import { テンプレートファイルModel } from "../Models/テンプレートファイルModel";

export class テンプレートファイルService extends HackPleasanterApi_ServiceBase<テンプレートファイルModel> {
  /** サイトID */
  public static readonly SITE_ID_CONSTANT = 5225;

  // 対象としているサイトITを取得する
  override getSiteId(): number {
    return テンプレートファイルService.SITE_ID_CONSTANT;
  }

  override makeItemType(_rawData: RecordDataItems): テンプレートファイルModel {
    return new テンプレートファイルModel(_rawData);
  }
}
