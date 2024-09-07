import React, { createContext, useContext, useEffect, useState } from 'react'

const LangContext = createContext()

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  
    const [lang, setLang] = useState('en');
  
    useEffect(() => {
      
      const browser_lang = window.navigator.language.substring(0,2);
      
      browser_lang == 'ru' || browser_lang == 'ka' || browser_lang == 'en' ? setLang(browser_lang) : setLang('en')
      
    }, []);

  return (
    <LangContext.Provider value={{lang, setLang}}>
        {children}
    </LangContext.Provider>
  )
}