# Fabrikam Retriever (Lightweight)
外部ライブラリ不要。`docs/` 配下のMarkdownを読み込み、簡易スコア（単語一致数 + タイトルボーナス）でTop-Kを返します。

```bash
python retriever.py --q "Fabrikamの主要製品" --topk 3
```