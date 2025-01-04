import Navbar from "../../../Shared/Navbar/Navbar";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Education from "../Education/Education";
import Skill from "../Skills/Skill";


const Home = () => {
    return (
        <div className="bg-main">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Education></Education>
        </div>
    );
};

export default Home;