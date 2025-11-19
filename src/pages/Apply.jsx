import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Apply() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [step, setStep] = React.useState(1)
  const [data, setData] = React.useState({ name: '', email: '', resume: '', cover: '' })

  const next = () => setStep((s) => s + 1)
  const back = () => setStep((s) => s - 1)

  const submit = (e) => {
    e.preventDefault()
    alert('Application submitted!')
    navigate('/profile')
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-xl font-semibold">Apply to job #{id}</h1>
        </div>

        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid gap-4">
          {step === 1 && (
            <div className="grid gap-3">
              <input value={data.name} onChange={(e)=>setData({...data,name:e.target.value})} placeholder="Full name" className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10" />
              <input value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} placeholder="Email" className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10" />
              <button type="button" onClick={next} className="px-4 py-2 rounded-xl bg-blue-500 text-white">Next</button>
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-3">
              <input value={data.resume} onChange={(e)=>setData({...data,resume:e.target.value})} placeholder="Resume link" className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10" />
              <textarea value={data.cover} onChange={(e)=>setData({...data,cover:e.target.value})} placeholder="Cover letter" className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 min-h-[120px]" />
              <div className="flex items-center gap-3">
                <button type="button" onClick={back} className="px-4 py-2 rounded-xl bg-white/10 text-white">Back</button>
                <button type="submit" className="px-4 py-2 rounded-xl bg-blue-500 text-white">Submit</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  )
}
