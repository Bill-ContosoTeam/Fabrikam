import argparse, os, glob, re, math

DOC_ROOT = os.path.join(os.path.dirname(__file__), "..", "..", "docs")

def tokenize(text):
    # ごく簡単なトークナイザ（日本語/英語混在でも形態素解析不要）
    return re.findall(r"[\w一-龥ぁ-んァ-ンー]+", text.lower())

def score(query_tokens, title, body):
    title_tokens = tokenize(title)
    body_tokens = tokenize(body)
    qset = set(query_tokens)
    overlap_title = len(qset & set(title_tokens))
    overlap_body = len(qset & set(body_tokens))
    return overlap_body + 2 * overlap_title  # タイトルは重み2

def search(query, topk=3):
    qtokens = tokenize(query)
    hits = []
    for path in glob.glob(os.path.join(DOC_ROOT, "**", "*.md"), recursive=True):
        with open(path, encoding="utf-8") as f:
            text = f.read()
        title = text.splitlines()[0] if text else os.path.basename(path)
        s = score(qtokens, title, text)
        if s > 0:
            hits.append((s, path))
    hits.sort(reverse=True)
    return hits[:topk]

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--q", required=True, help="クエリ文")
    ap.add_argument("--topk", type=int, default=3)
    args = ap.parse_args()
    results = search(args.q, args.topk)
    for s, p in results:
        print(f"{s:>3} | {os.path.relpath(p, DOC_ROOT)}")