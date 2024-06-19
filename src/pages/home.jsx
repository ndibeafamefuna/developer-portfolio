import Header from "../layout/header/header"
import Hero from "../component/hero/hero"
import Skills from "../component/skills/skills"
import Project from "../component/project/project"
import Contact from "../component/contact/contact"
import Footer from "../layout/footer/footer"

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Skills />
        <Project />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home