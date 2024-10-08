import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Expirience, Home, Projects, Testimonials } from "./pages";
import { LangProvider } from "./context/LangContext";

const App = () => {

  return (
    <main className='bg-slate-300/20'>
      <LangProvider>
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
                    <Route path='/expirience' element={<Expirience />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                  </Routes>
                </>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </LangProvider>
    </main>
  );
};

export default App;