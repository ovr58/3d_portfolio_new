import Socials from "./Socials"

function Footer() {

  return (
    <footer className = 'footer'>
      <div className="footer-container">
        <div className="hidden sm:flex px-6 pt-2 glassmorphism">
          <div className="mb-2 flex justify-center">
            <Socials />
          </div>
        </div>
        <div className="hidden sm:flex p-4 text-center glassmorphism">
          <a className="text-black" href="https://github.com/ovr58" target="_blank" rel="noreferrer" aria-label="my link">
            © 2024
            {'/'}
            made by Evgenii Sukharnikov
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer