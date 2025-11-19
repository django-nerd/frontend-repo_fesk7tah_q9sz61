import React from 'react'
import Filters from '../components/Filters'
import JobCard from '../components/JobCard'

const SAMPLE_JOBS = [
  { id: '1', title: 'Senior Frontend Engineer', company: 'Acme Corp', location: 'Remote', level: 'Senior', type: 'Full-time', posted: '2d ago' },
  { id: '2', title: 'Product Designer', company: 'Nimbus', location: 'London', level: 'Mid', type: 'Contract', posted: '1w ago' },
  { id: '3', title: 'Data Scientist', company: 'Quanta Labs', location: 'New York', level: 'Senior', type: 'Full-time', posted: '3d ago' },
]

export default function Jobs() {
  const [filters, setFilters] = React.useState({ q: '', location: '', type: '', level: '' })

  const filtered = SAMPLE_JOBS.filter((j) => {
    return (
      (!filters.q || j.title.toLowerCase().includes(filters.q.toLowerCase()) || j.company.toLowerCase().includes(filters.q.toLowerCase())) &&
      (!filters.location || j.location === filters.location) &&
      (!filters.type || j.type === filters.type) &&
      (!filters.level || j.level === filters.level)
    )
  })

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6">
        <h1 className="text-2xl font-semibold">Job listings</h1>
        <Filters filters={filters} setFilters={setFilters} />

        <div className="grid gap-4">
          {filtered.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </main>
  )
}
