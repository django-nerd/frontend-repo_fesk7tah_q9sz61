import React from 'react'
import Hero from '../components/Hero'

export default function Landing() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Hero />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 grid md:grid-cols-3 gap-6">
        {[
          { title: 'For Candidates', desc: 'Discover curated roles, apply in a few clicks, and track your applications.' },
          { title: 'For Recruiters', desc: 'Post openings, manage pipelines, and review applicants efficiently.' },
          { title: 'For Admins', desc: 'Oversee users and companies with clear controls and activity insights.' },
        ].map((card) => (
          <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/10">
            <h3 className="font-semibold text-white">{card.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{card.desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
