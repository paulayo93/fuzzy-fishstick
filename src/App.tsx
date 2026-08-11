import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'
import { Services } from './pages/Services'
import { Sustainability } from './pages/Sustainability'
import { Hse } from './pages/Hse'
import { Investors } from './pages/Investors'
import { Partners } from './pages/Partners'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="sustainability" element={<Sustainability />} />
          <Route path="hse" element={<Hse />} />
          <Route path="investors" element={<Investors />} />
          <Route path="partners" element={<Partners />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
