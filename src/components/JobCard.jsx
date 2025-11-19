import React from 'react'
import { MapPin, Briefcase, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function JobCard({ job }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/10 transition-colors shadow-lg shadow-slate-900/10"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white flex items-center justify-center font-semibold">
          {job.company?.[0] || 'W'}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <Link to={`/jobs/${job.id}`} className="text-white font-medium hover:underline">
              {job.title}
            </Link>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
              {job.type}
            </span>
          </div>
          <p className="text-slate-300/90 text-sm mt-1">{job.company}</p>
          <div className="flex flex-wrap items-center gap-3 text-slate-300/80 text-sm mt-3">
            <span className="inline-flex items-center gap-1"><MapPin size={16}/> {job.location}</span>
            <span className="inline-flex items-center gap-1"><Briefcase size={16}/> {job.level}</span>
            <span className="inline-flex items-center gap-1"><Clock size={16}/> {job.posted}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
