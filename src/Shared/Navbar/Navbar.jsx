
import { Link } from 'react-scroll';
import passportImg from '../../../src/assets/passport.png'

const Navbar = () => {
    const links = <>
        <li> <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link> </li>
        <li> <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link> </li>
        <li> <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link></li>
        <li> <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500}>Education</Link></li>
        <li> <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link></li>
        <li> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>Contact</Link></li>
    </>
    return (
        <div className="fixed top-0 w-full bg-main">
            <div className=" navbar bg-main w-[90%] xl:w-[80%]  mx-auto">
                <div className="navbar-start gap-2">
                    <div className="border-2 border-gray-700 rounded-full"><img className="w-[40px] rounded-full" src={passportImg} alt="" /></div>
                    <div><p className="font-medium text-xl font-secondey">YEAMIN</p></div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-secondery">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="bg-btn text-sm">
                        <a target='_blank' href={'https://drive.google.com/file/d/1sN0fFgqUcqOY5BG_gDNleY-6sZIArijV/view?usp=sharing'}>
                            Download Resume
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;