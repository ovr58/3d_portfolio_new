import { useState, useMemo, useContext } from 'react';

import { localize } from '../utils/Translation';
import LangMenu from '../utils/LangMenu';
import { logo, menu, close } from '../assets';
import { SiteLang } from '../context/LangContext';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { lang } = useContext(SiteLang);
  const [toggle, setToggle] = useState(false);
  const navLinks = useMemo(() => localize(lang, 'navLinks'), [lang]);

  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
    <nav className='flex text-lg gap-7 font-medium'>
      <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
        About
      </NavLink>
      <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
        Projects
      </NavLink>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <NavLink key={link.id} to={`/${link.id}`} aria-label={`#${link.title}`} className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
              {link.title}
            </NavLink>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl grid grid-cols-1`}
            >
            <ul className="list-none flex justify-end flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink key={link.id} to={`/${link.id}`} aria-label={`#${link.title}`} onClick={setToggle(false)} className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
                  {link.title}
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <LangMenu />
    </nav>
    </header>
  );
};

export default Navbar;
