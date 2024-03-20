### 接続用のグルーコードを生成

pleasanter接続用のモックは以下コードで生成します。

```bash
docker run --rm -v $(pwd):/local yamada28go/hack-pleasanter-api-cli2:0.11 /local Generation --config GenerateConfig.xml  export.json
```

