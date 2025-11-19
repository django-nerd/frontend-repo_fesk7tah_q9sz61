import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute -left-24 -top-24 w-[500px] h-[500px] bg-blue-500 blur-[120px] rounded-full" />
        <div className="absolute -right-24 -bottom-24 w-[500px] h-[500px] bg-cyan-400 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/5 text-blue-300 ring-1 ring-white/10">
            Modern • Minimal • Professional
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Find work you love. Hire with confidence.
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
            A refined job platform for candidates, recruiters, and admins with a clean UI and smooth interactions.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="/jobs" className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors shadow-sm">
              Browse jobs
            </a>
            <a href="/jobs/post" className="px-5 py-3 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-400 transition-colors shadow-sm">
              Post a job
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
