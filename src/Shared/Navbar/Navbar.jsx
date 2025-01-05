import { Link } from "react-router-dom";
import passportImg from '../../../src/assets/passport.png'

const Navbar = () => {
    const links = <>
        <li> <a href={'/'}>Home</a> </li>
        <li> <a href="#about">About</a> </li>
        <li> <a href={'#skills'}>Skills</a></li>
        <li> <a href={'#education'}>Education</a></li>
        <li> <a href={'#projects'}>Projects</a></li>
        <li> <a href={'#contact'}>Contact</a></li>
    </>
    return (
        <div className="navbar bg-main">
            <div className="navbar-start gap-2">
                <div className="border-2 border-gray-700 rounded-full p-2"><img className="w-[40px]" src={passportImg} alt="" /></div>
                <div><p className="font-medium text-xl font-secondey">YEAMIN</p></div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-secondery">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="bg-[#191b1f] color-main rounded-xl px-4 py-2">
                    <Link to={'https://docs.google.com/document/d/1BzEW8vkONHoERDbPd8VwOaEa13PyQgABDF7cg2dph3M/edit?usp=sharing'}>
                        Download Resume
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;