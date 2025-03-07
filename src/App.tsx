import './App.css'
import AboutMeUI from './components/AboutMeUI'
import ContactsUI from './components/ContactsUI'
import HomeUI from './components/HomeUI'
import ProjectsUI from './components/ProjectsUI'
import FooterUI from './layout/FooterUI'
import Navbar from './layout/Navbar'

function App() {

  return (
    <>
    <Navbar />
    <HomeUI />
    <AboutMeUI />
    <ProjectsUI />
    <ContactsUI />
    <FooterUI />
    </>
  )
}

export default App
