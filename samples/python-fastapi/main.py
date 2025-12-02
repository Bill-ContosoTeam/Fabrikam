from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="Fabrikam Support API")

class Ticket(BaseModel):
    title: str
    description: str

FAQ = [
    {"q":"納期は？","a":"標準リードタイムは2〜4週間です。"},
    {"q":"APIはありますか？","a":"OpenAPI仕様を `openapi/fabrikam-support.yaml` に公開しています。"},
]

@app.get("/support/faq")
def get_faq():
    return FAQ

@app.post("/support/tickets", status_code=201)
def create_ticket(t: Ticket):
    # 実際はDBやキューに積む
    return {"id":"T-1001","title":t.title,"status":"received"}