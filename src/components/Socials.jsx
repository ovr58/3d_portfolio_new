import { Menu, MenuItem, MenuItems } from '@headlessui/react'
import { telegram, whatsup } from '../assets';
import { useLang } from '../context/LangContext';
import { localize } from '../utils/Translation';
import { useMemo } from 'react';


const Socials = (mode='horisontal') => {

    const { lang } = useLang()

    const contactText = useMemo(() => localize(lang, 'contact_text'), [lang])

    const telNumber = import.meta.env.VITE_APP_TELNUMBER

  return (
    <Menu>
        <MenuItem>
            <a
                href="https://www.facebook.com/matveeva.natalya"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-200 focus:outline-none focus:ring-0 content-center"
                data-te-ripple-init
                data-te-ripple-color="light"
                aria-label="my facebook page"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
            </a>
        </MenuItem>
        <MenuItem>
            <a
                href="https://twitter.com/noyeryadom78832/"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-200 focus:outline-none focus:ring-0 content-center"
                data-te-ripple-init
                data-te-ripple-color="light"
                aria-label="i am on twitter or x"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
            </a>
        </MenuItem>
        <MenuItem>
            <a
                href="https://instagram.com/nd_visualisation"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-200 focus:outline-none focus:ring-0 content-center"
                data-te-ripple-init
                data-te-ripple-color="light"
                aria-label="my instagram"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </a>
        </MenuItem>
        <MenuItem>
            <a
                href="https://boosty.to/3dnataly"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-black uppercase leading-normal text-black transition duration-150 ease-in-out hover:bg-blue-200 focus:outline-none focus:ring-0 content-center"
                data-te-ripple-init
                data-te-ripple-color="light"
                aria-label="my support plan"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-4"
                fill="currentColor"
                viewBox="0 0 235.6 292.2"
                >
                <path d="M44.3,164.5L76.9,51.6H127l-10.1,35c-0.1,0.2-0.2,0.4-0.3,0.6L90,179.6h24.8c-10.4,25.9-18.5,46.2-24.3,60.9,c-45.8-0.5-58.6-33.3-47.4-72.1 M90.7,240.6l60.4-86.9h-25.6l22.3-55.7c38.2,4,56.2,34.1,45.6,70.5,c-11.3,39.1-57.1,72.1-101.7,72.1C91.3,240.6,91,240.6,90.7,240.6z" />
                </svg>
            </a>
        </MenuItem>
        <MenuItem>
            <a
                href={`https://wa.me/${telNumber}`}
                target="_blank"
                className="px-2 py-2 h-11 w-11 shadow-primary hover:animate-ping"
                rel="noreferrer"
                aria-label="message via whatsapp"
            >
                <img
                src={whatsup}
                alt="whatsup"
                className=" h-[30px] w-[30px]"
                title={contactText.form_title_whatsup}
                />
            </a>
        </MenuItem>
        <MenuItem>
            <a
                href={`https://t.me/natatulia84`}
                target="_blank"
                className="px-2 py-2 h-11 w-11 shadow-primary hover:animate-ping"
                rel="noreferrer"
                aria-label="message via telegram"
            >
                <img
                src={telegram}
                alt="telegram"
                className=" h-[30px] w-[30px]"
                title={contactText.form_title_telega}
                />
            </a>
        </MenuItem>
    </Menu>
  );
};

export default Socials