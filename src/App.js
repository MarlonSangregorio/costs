import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//-- Pages
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

//Layout Container
import Container from './components/layout/Container'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <NavBar />

      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />}>
            {' '}
          </Route>

          <Route exact path="/company" element={<Company />}></Route>

          <Route exact path="/contact" element={<Contact />}></Route>

          <Route exact path="/projects" element={<Projects />}></Route>

          <Route exact path="/newproject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <Footer />
    </Router>
  )
}

export default App
