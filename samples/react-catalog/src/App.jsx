import React, { useEffect, useState } from 'react'

export default function App() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState("")
  const [cat, setCat] = useState("All")

  useEffect(() => {
    fetch('/data/products.json').then(r => r.json()).then(setItems)
  }, [])

  const cats = ["All", ...new Set(items.map(i => i.category))]
  const filtered = items.filter(i => 
    (cat === "All" || i.category === cat) &&
    (q === "" || (i.name + " " + i.tags.join(" ")).toLowerCase().includes(q.toLowerCase()))
  )

  return (
    <div style={{fontFamily:'system-ui', margin:'2rem auto', maxWidth:800}}>
      <h1>Fabrikam Catalog</h1>
      <div style={{display:'flex', gap:'1rem', marginBottom:'1rem'}}>
        <input placeholder="Search name or tags..." value={q} onChange={e=>setQ(e.target.value)} />
        <select value={cat} onChange={e=>setCat(e.target.value)}>
          {cats.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <ul>
        {filtered.map(p => (
          <li key={p.id} style={{margin:'0.5rem 0'}}>
            <strong>{p.name}</strong> — {p.category} — ${p.price} — stock:{p.stock}
          </li>
        ))}
      </ul>
    </div>
  )
}