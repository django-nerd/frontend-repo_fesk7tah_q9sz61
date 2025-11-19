import React from 'react'

export default function Admin() {
  const [users] = React.useState([
    { id: 'u1', name: 'Jane Doe', role: 'Candidate' },
    { id: 'u2', name: 'John Smith', role: 'Recruiter' },
  ])
  const [companies] = React.useState([
    { id: 'c1', name: 'Acme Corp' },
    { id: 'c2', name: 'Nimbus' },
  ])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold">Admin panel</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium text-white">Users</h3>
            <div className="mt-4 grid gap-3">
              {users.map((u) => (
                <div key={u.id} className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white">{u.name}</p>
                    <p className="text-slate-400 text-sm">{u.role}</p>
                  </div>
                  <button className="text-xs px-2 py-1 rounded-xl bg-white/10 text-white">Manage</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium text-white">Companies</h3>
            <div className="mt-4 grid gap-3">
              {companies.map((c) => (
                <div key={c.id} className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <p className="text-white">{c.name}</p>
                  <button className="text-xs px-2 py-1 rounded-xl bg-white/10 text-white">Manage</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
