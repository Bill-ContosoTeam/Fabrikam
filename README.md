# Fabrikam Demo Repository

> デモ・検証・プリセールスで使える、実践的で“本物っぽい”Fabrikam社のレポジトリ一式。  
> 2つの React サンプル + 2つの Python サンプル、そしてエージェント検索（RAG/軽量キーワード検索）に最適化したドキュメント/FAQ/JSONLを収録。

## 構成
- `docs/` 会社概要・製品説明・FAQ・ポリシーなど（検索に最適化）
- `data/` 製品や顧客のサンプルデータ（JSON/CSV）
- `openapi/` サポートAPIの OpenAPI 仕様（mock/実装に使用）
- `samples/react-catalog/` React製の製品カタログSPA（ローカルJSONを検索/フィルタ）
- `samples/react-support-portal/` React製のサポートポータルUI（API連携のモック）
- `samples/python-fastapi/` FastAPIによるサポートAPIの実装サンプル
- `samples/python-retriever/` エージェント向けの軽量ドキュメント検索サンプル（Python標準のみ）
- `search/` FAQのJSONL、システムプロンプト、コーパス（RAG用）

## 使い方（クイック）
- React（例: Catalog）:  
  ```bash
  cd samples/react-catalog
  npm i && npm run dev
  ```
- FastAPI:
  ```bash
  cd samples/python-fastapi
  pip install -r requirements.txt
  uvicorn main:app --reload
  ```
- Retriever（簡易検索）:
  ```bash
  cd samples/python-retriever
  python retriever.py --q "Fabrikamの主要製品" --topk 3
  ```

## ライセンス
MIT