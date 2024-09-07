import { Fragment } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

import { ru, ka, en } from '../assets';
import { useLang } from '../context/LangContext';

const LangMenu = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="top-16 w-20">
      <Listbox value={lang} onChange={setLang}>
        <div className="relative mt-1">
          <ListboxButton
            title="language choose"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-1 py-1 text-sm font-semibold text-gray-900 shadow-sm"
          >
            <span className="block truncate">
              <img
                src={lang === 'en' ? en : lang === 'ru' ? ru : ka}
                alt={lang}
              />
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-start pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-white"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-transparent py-1 text-base shadow-lg focus:outline-none sm:text-sm">
              <ListboxOption
                key="ka"
                className={({ selected }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    selected ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value="ka"
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      <img src={ka} alt="Georgian" />
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
              <ListboxOption
                key="en"
                className={({ selected }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    selected ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value="en"
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      <img src={en} alt="English" />
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
              <ListboxOption
                key="ru"
                className={({ selected }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    selected ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                  }`
                }
                value="ru"
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      <img src={ru} alt="Russian" />
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LangMenu;
