import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Intro from './components/Intro.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import WhoWeHelp from './pages/WhoWeHelp.jsx'
import OurHomes from './pages/OurHomes.jsx'
import OurPeople from './pages/OurPeople.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export const routes = [
  { path: '/', label: 'Home', element: <Home /> },
  { path: '/about', label: 'Who We Are', element: <About /> },
  { path: '/who-we-help', label: 'Who We Help', element: <WhoWeHelp /> },
  { path: '/our-homes', label: 'Our Homes', element: <OurHomes /> },
  { path: '/our-people', label: 'Our People', element: <OurPeople /> },
  { path: '/contact', label: 'Contact', element: <Contact /> },
]

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function App() {
  const location = useLocation()
  const [introDone, setIntroDone] = useState(false)
  const showIntro = location.pathname === '/' && !introDone && !reduced()

  useEffect(() => {
    if (location.pathname !== '/') setIntroDone(false)
  }, [location.pathname])

  return (
    <Layout logoReady={!showIntro}>
      {showIntro && <Intro onDone={() => setIntroDone(true)} />}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location}>
            {routes.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Layout>
  )
}
