import React, { useState } from 'react'

export default function App(){
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [log, setLog] = useState([])

  async function submit(){
    setLog(l => [...l, "POST /support/tickets ... (mock)"])
    // 実運用では FastAPI サンプルを起動して fetch してください
    // await fetch('http://localhost:8000/support/tickets', { method:'POST', body: JSON.stringify({title, description:desc}) })
    setTitle(""); setDesc("");
  }

  return (
    <div style={{fontFamily:'system-ui', margin:'2rem auto', maxWidth:720}}>
      <h1>Fabrikam Support Portal</h1>
      <section style={{margin:'1rem 0'}}>
        <h2>FAQ</h2>
        <ul>
          <li>納期は2〜4週間です。</li>
          <li>APIは OpenAPI 仕様に準拠しています。</li>
          <li>ISO 27001 に準拠しています。</li>
        </ul>
      </section>
      <section style={{margin:'1rem 0'}}>
        <h2>Create Ticket</h2>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} /><br/>
        <textarea placeholder="Describe your issue..." value={desc} onChange={e=>setDesc(e.target.value)} rows="4" style={{width:'100%'}}/>
        <button onClick={submit}>Submit</button>
      </section>
      <section>
        <h2>Activity</h2>
        <pre>{log.join("\n")}</pre>
      </section>
    </div>
  )
}