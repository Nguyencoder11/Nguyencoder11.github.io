import About from "./About"
import Certificates from "./Certificates"
import Contact from "./Contact"
import Experience from "./Experience"
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"

const Home = ({ theme }) => {

    return (
        <>
            <Hero theme={theme} />
            <About theme={theme} />
            <Experience theme={theme} />
            <Projects theme={theme} />
            <Skills theme={theme} />
            <Certificates theme={theme} />
            <Contact theme={theme} />
        </>
    )
}

export default Home
