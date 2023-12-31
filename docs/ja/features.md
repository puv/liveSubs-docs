---
outline: deep
---

## 基本
- 「翻訳サービス」
   - `LibreTranslate` - API キーは必要ありませんが、遅く、不正確です。
   - `Google Translate` - API キーはオプションで、高速かつ正確です。
- `API キー` - 選択した翻訳サービスの API キーを入力します。 一部のサービスは API キーを必要としません。
- `背景色` - ページの背景色を選択します。 これは **クロマ キーイング**に役立ちます
- `サーバーモード` - **[アプリのみ]**
   - `ON` - アプリはサーバーとして実行され、`/client` エンドポイント経由で接続できます。
   - `OFF` - アプリは通常通り実行されます。 ブラウザのソースが動作しません。
- `入力デバイス` - **[未実装]** 使用する入力デバイスを選択します。 これは、複数のマイクがある場合に便利です。
- `出力デバイス` - **[未実装]** 使用したい出力デバイスを選択します。 これは、複数のスピーカーがある場合に便利です。


## 字幕と翻訳
- `色` - 字幕/翻訳テキストの色を選択します。
- `Border` - 字幕/翻訳テキストの境界線の色を選択します。
- `サイズ` - 字幕/翻訳テキストのサイズを選択します。
- `Weight` - 字幕/翻訳テキストの幅を選択します。
- `境界線サイズ` - 字幕/翻訳テキストの境界線のサイズを選択します。
- `言語`
   - `字幕` では、話す言語を選択します。
   - `翻訳` では、字幕を翻訳したい言語を選択します。
- `フォント` - 字幕/翻訳テキストのフォントを選択します。


## 文章
- `水平` - テキストの水平位置を選択します。
   - `Left` - テキストは左揃えになります。
   - `Center` - **[デフォルト]** テキストは中央に揃えられます。
   - `Right` - テキストは右揃えになります。
- `Vertical` - テキストの垂直位置を選択します。
   - `Top` - テキストは上に揃えられます。
   - `Bottom` - **[DEFAULT]** テキストは下に揃えられます。
- `White Space` - 長い文章を改行するかどうかを選択します。
   - `NORMAL` - **[デフォルト]** 長い文章は改行されます。
   - `NO WRAP` - 長い文章は改行されません。
- `削除タイマー` (ミリ秒) - テキストを削除するまでの待機時間を選択します。
   - `0` - **[デフォルト]** テキストは削除されません。
   - `100-5000` - テキストは指定された時間が経過すると削除されます。
- `新しい文タイマー` (ミリ秒) - 新しい文を開始するまでの待機時間を選択します。
   - `0` - サーバーが文の終わりを検出するまで待ちます。 これによりアプリが壊れる可能性があります。
   - `100-1000` - 新しい文を開始する前に待機する沈黙の量。
   - `1000` - **[デフォルト]**
- `言語を表示` - 翻訳の言語を表示するかどうかを選択します。
   - `ON` - 言語が表示されます。
   - `OFF` - **[デフォルト]** 言語は表示されません。
- `棒読みちゃん` - **[未実装]** 棒読みちゃんプロトコルを使用するかどうかを選択します。
   - `ON` - 棒読みちゃんプロトコルを使用します。
   - `OFF` - **[デフォルト]** 棒読みちゃんプロトコルは使用されません。
- `Censor Words` - **[未実装]** 冒涜的な言葉を検閲するかどうかを選択します。
   - `ON` - 単語は検閲されます。
   - `OFF` - **[デフォルト]** 単語は検閲されません。