import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import { useEffect, useMemo, useState } from "react";
import { SiteLang } from "./context/LangContext";

const App = () => {

  const [lang, setLang] = useState('en');
  
  useEffect(() => {
    
    const browser_lang = window.navigator.language.substring(0,2);
    
    browser_lang == 'ru' || browser_lang == 'ka' || browser_lang == 'en' ? setLang(browser_lang) : setLang('en')
    
  }, []);
  
  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <SiteLang.Provider value={value}>
    <main className='bg-slate-300/20'>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route
              path='/*'
              element={
                <>
                  <Routes>
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                  </Routes>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
    </main>
    </SiteLang.Provider>
  );
};

export default App;