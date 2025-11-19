import React from 'react'

export default function Recruiter() {
  const [jobs, setJobs] = React.useState([
    { id: '11', title: 'Backend Engineer', applicants: 8, status: 'Open' },
    { id: '12', title: 'QA Analyst', applicants: 5, status: 'Open' },
  ])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold">Recruiter dashboard</h1>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium text-white">Post a job</h3>
            <div className="mt-4 grid gap-3">
              <input placeholder="Job title" className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10" />
              <textarea placeholder="Description" className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 min-h-[120px]" />
              <button className="px-4 py-2 rounded-xl bg-blue-500 text-white">Publish</button>
            </div>
          </div>
          <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-medium text-white">Your jobs</h3>
            <div className="mt-4 grid gap-3">
              {jobs.map((j) => (
                <div key={j.id} className="rounded-xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white">{j.title}</p>
                    <p className="text-slate-400 text-sm">{j.applicants} applicants</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">{j.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
