import { useState, useMemo, useEffect } from 'react';

import { localize } from '../utils/Translation';
import LangMenu from '../utils/LangMenu';
import { logo, menu, close } from '../assets';
import { useLang } from '../context/LangContext';
import { NavLink } from 'react-router-dom';

const NavigationLinks = ({mode}) => {

  const { lang } = useLang();

  const navLinks = useMemo(() => localize(lang, 'navLinks'), [lang]);

  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      <li>
        <NavLink key={'aboutFull'} to={`/about`} aria-label={`#about`} className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          {navLinks[0].about}
        </NavLink>
      </li>
      <li>
        <NavLink key={'workFull'} to={`/projects`} aria-label={`#projects`} className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          {navLinks[1].work}
        </NavLink>
      </li>
      <li>
        <NavLink key={'contactFull'} to={`/contact`} aria-label={`#contact`} className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          {navLinks[2].contact}
        </NavLink>
      </li>
    </ul>
  )
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'/>
      </NavLink>
    <nav className='flex text-lg gap-7 font-medium'>
      <div className="w-full flex justify-between items-center mx-auto">
        {windowWidth >=640 ? <NavigationLinks mode={'list-none flex flex-row gap-10'} /> : 
        <div className="flex flex-1 justify-end items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
          <div className={`grid place-content-center w-16 h-16 p-6 mx-auto ${toggle ? 'hamburger-toggle' : ''}`} >
          <div
            className="
              w-12
              h-2 
              bg-black 
              rounded-full 
              transition-all 
              duration-150 
              before:content-[''] 
              before:absolute 
              before:w-12 
              before:h-2 
              before:bg-black 
              before:rounded-full 
              before:-translate-y-4 
              before:transition-all 
              before:duration-150 
              after:content-[''] 
              after:absolute 
              after:w-12 
              after:h-2 
              after:bg-black 
              after:rounded-full 
              after:translate-y-4 
              after:transition-all 
              after:duration-150
            "
          ></div>
          </div>
          {toggle ?
           <div
            className='p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl grid grid-cols-1'
            >
            <NavigationLinks mode={'list-none flex justify-end flex-col gap-4'} />
          </div> : ''}
        </div>}
      </div>
      <LangMenu />
    </nav>
    </header>
  );
};

export default Navbar;
