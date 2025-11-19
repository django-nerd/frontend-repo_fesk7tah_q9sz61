import React from 'react'

export default function Filters({ filters, setFilters }) {
  const update = (key, value) => setFilters((f) => ({ ...f, [key]: value }))

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <input
        value={filters.q}
        onChange={(e) => update('q', e.target.value)}
        placeholder="Search roles, companies..."
        className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
      />
      <select
        value={filters.location}
        onChange={(e) => update('location', e.target.value)}
        className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none"
      >
        <option value="">All locations</option>
        <option>Remote</option>
        <option>New York</option>
        <option>London</option>
        <option>Berlin</option>
      </select>
      <select
        value={filters.type}
        onChange={(e) => update('type', e.target.value)}
        className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none"
      >
        <option value="">Any type</option>
        <option>Full-time</option>
        <option>Part-time</option>
        <option>Contract</option>
        <option>Internship</option>
      </select>
      <select
        value={filters.level}
        onChange={(e) => update('level', e.target.value)}
        className="px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 text-white focus:outline-none"
      >
        <option value="">Any level</option>
        <option>Junior</option>
        <option>Mid</option>
        <option>Senior</option>
        <option>Lead</option>
      </select>
    </div>
  )
}
