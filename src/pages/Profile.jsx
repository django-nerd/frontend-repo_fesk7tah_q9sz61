import React from 'react'

export default function Profile() {
  const [profile, setProfile] = React.useState({ name: 'Jane Doe', title: 'Product Designer', location: 'Remote', bio: 'Designing human, accessible experiences.' })
  const [apps] = React.useState([
    { id: '1', role: 'Senior Frontend Engineer', company: 'Acme Corp', status: 'Under review' },
    { id: '2', role: 'Product Designer', company: 'Nimbus', status: 'Interview' },
  ])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold">Candidate profile</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400" />
            <h2 className="mt-4 text-white font-medium">{profile.name}</h2>
            <p className="text-slate-300 text-sm">{profile.title}</p>
            <p className="text-slate-400 text-sm mt-2">{profile.location}</p>
            <p className="text-slate-300 text-sm mt-3 leading-6">{profile.bio}</p>
          </div>
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium text-white">Applications</h3>
            <div className="mt-4 grid gap-3">
              {apps.map((a) => (
                <div key={a.id} className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white">{a.role}</p>
                    <p className="text-slate-400 text-sm">{a.company}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20">{a.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
