import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Briefcase, User, Building2, Shield } from 'lucide-react'

const navItems = [
  { to: '/jobs', label: 'Jobs' },
  { to: '/profile', label: 'Profile' },
  { to: '/recruiter', label: 'Recruiter' },
  { to: '/admin', label: 'Admin' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
              <Briefcase size={20} />
            </div>
            <span className="font-semibold text-white tracking-tight">Workboard</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/jobs/post"
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 rounded-xl transition-colors shadow-sm"
            >
              <Building2 size={16} />
              Post a job
            </Link>
          </nav>

          <button onClick={() => setOpen((o) => !o)} className="md:hidden p-2 rounded-xl bg-white/5 text-white">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-slate-200 bg-white/5 hover:bg-white/10 px-3 py-2 rounded-xl"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/jobs/post"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white text-sm px-4 py-2 rounded-xl transition-colors"
              >
                <Building2 size={16} />
                Post a job
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
