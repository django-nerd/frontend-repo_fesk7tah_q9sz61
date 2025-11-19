import React from 'react'
import { useParams, Link } from 'react-router-dom'

const SAMPLE = {
  '1': { title: 'Senior Frontend Engineer', company: 'Acme Corp', location: 'Remote', type: 'Full-time', level: 'Senior', description: 'We are looking for a frontend engineer to build delightful experiences using React and Tailwind.' },
  '2': { title: 'Product Designer', company: 'Nimbus', location: 'London', type: 'Contract', level: 'Mid', description: 'Design intuitive interfaces and experiences across web and mobile.' },
  '3': { title: 'Data Scientist', company: 'Quanta Labs', location: 'New York', type: 'Full-time', level: 'Senior', description: 'Analyze data and build models to inform product decisions.' },
}

export default function JobDetail() {
  const { id } = useParams()
  const job = SAMPLE[id]

  if (!job) return <div className="p-10 text-white">Job not found</div>

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-white">{job.title}</h1>
              <p className="text-slate-300 mt-1">{job.company} • {job.location} • {job.type} • {job.level}</p>
            </div>
            <Link to={`/jobs/${id}/apply`} className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition">Apply</Link>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-medium text-white">About the role</h2>
          <p className="text-slate-300 mt-2 leading-7">{job.description}</p>
        </div>
      </div>
    </main>
  )
}
