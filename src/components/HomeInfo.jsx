import { Link } from "react-router-dom"
import { arrow } from "../assets"
import { useLang } from "../context/LangContext"
import { useMemo } from "react"
import { localize } from "../utils/Translation"

const HomeInfo = ({ stage }) => {

    const { lang } = useLang()

    const heroText = useMemo(() => localize(lang, 'herotext'), [lang])

  if (stage === 0)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        {heroText.hitext}
        <span className='font-semibold mx-2 text-white'>{heroText.nametext}</span>
        👋
        <br />
        {heroText.myintro[0]} <br className="sm:block hidden" />
        {heroText.myintro[1]} <br className="sm:block hidden" />
        {heroText.myintro[2]} <br className="sm:block hidden" />
      </h1>
    )

  if (stage === 1) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          {heroText.about[0]} <br /> {heroText.about[1]}
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          {heroText.learnMore}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    )
  }

  if (stage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          {heroText.socials[0]} <br /> {heroText.socials[1]}
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          {heroText.learnMore}
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    )
  }

  if (stage === 3) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        {heroText.portfolio[0]} <br/> {heroText.portfolio[1]}
      </p>

      <Link to='/projects' className='neo-brutalism-white neo-btn'>
        {heroText.portfolio[2]}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    )
  }

  if (stage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        {heroText.reviews[0]}
      </p>

      <Link to='/testimonials' className='neo-brutalism-white neo-btn'>
        {heroText.reviews[1]}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    )
  }

  if (stage === 5) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        {heroText.experience[0]}
      </p>

      <Link to='/expirience' className='neo-brutalism-white neo-btn'>
        {heroText.learnMore}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    )
  }

  if (stage === 6) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        {heroText.readytowork[0]} <br /> {heroText.readytowork[1]}
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        {heroText.readytowork[2]}
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    )
  }

  return null
}

export default HomeInfo