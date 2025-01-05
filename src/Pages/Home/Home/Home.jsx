import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skill from "../Skills/Skill";


const Home = () => {
    return (
        <div className="bg-main overflow-hidden">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;