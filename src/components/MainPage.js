import { About } from "./About"
import { Contact } from "./Contact"
import { Home } from "./Home"
import { Projects } from "./Projects"

export const MainPage = () => {
    return(
        <div className="main-page">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
    )
}