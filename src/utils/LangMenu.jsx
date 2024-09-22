import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { ru, ka, en } from '../assets';
import { useLang } from '../context/LangContext';

const LangMenu = () => {
  const { lang, setLang } = useLang();
  return (
    <Menu>
      <MenuButton className="inline-flex items-center gap-2 rounded-md bg-slate-100 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-slate-300 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        <span className="w-7">
            <img
              className='w-7 h-7'
              src={lang === 'en' ? en : lang === 'ru' ? ru : ka}
              alt={lang}
            />
          </span>
          <span className="">
            <ChevronUpDownIcon
              className="h-7 w-7 text-black"
              aria-hidden="true"
            />
          </span>
      </MenuButton>
      <MenuItems 
        anchor="bottom end"
        transition
        className="z-10 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button 
            className={`
              ${lang === 'ru' ? 'bg-blue-500' : ''}
              group 
              flex w-full 
              items-center 
              gap-2 
              rounded-lg 
              py-1.5 
              px-3 
              data-[focus]:bg-blue-200
            `}
            onClick={() => setLang('ru')}
          >
            <img src={ru} className="size-4 fill-white/30" alt="Russian" />
            RU
          </button>
        </MenuItem>
        <MenuItem>
        <button 
            className={`
              ${lang === 'ka' ? 'bg-blue-500' : ''}
              group 
              flex w-full 
              items-center 
              gap-2 
              rounded-lg 
              py-1.5 
              px-3 
              data-[focus]:bg-blue-200
            `}
            onClick={() => setLang('ka')}
          >
            <img src={ka} className="size-4 fill-white/30" alt="Georgian" />
            KA
          </button>
        </MenuItem>
        <MenuItem>
          <button 
            className={`
              ${lang === 'en' ? 'bg-blue-500' : ''}
              group 
              flex w-full 
              items-center 
              gap-2 
              rounded-lg 
              py-1.5 
              px-3 
              data-[focus]:bg-blue-200
            `}
            onClick={() => setLang('en')}
          >
            <img src={en} className="size-4 fill-white/30" alt="English" />
            EN
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default LangMenu;
