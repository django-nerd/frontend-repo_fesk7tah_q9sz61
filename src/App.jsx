import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Apply from './pages/Apply'
import Profile from './pages/Profile'
import Recruiter from './pages/Recruiter'
import Admin from './pages/Admin'

const Page = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Landing /></Page>} />
          <Route path="/jobs" element={<Page><Jobs /></Page>} />
          <Route path="/jobs/:id" element={<Page><JobDetail /></Page>} />
          <Route path="/jobs/:id/apply" element={<Page><Apply /></Page>} />
          <Route path="/profile" element={<Page><Profile /></Page>} />
          <Route path="/recruiter" element={<Page><Recruiter /></Page>} />
          <Route path="/admin" element={<Page><Admin /></Page>} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
