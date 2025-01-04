import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skill from "../Skills/Skill";


const Home = () => {
    return (
        <div className="bg-main">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Projects></Projects>
        </div>
    );
};

export default Home;