import { Link } from "react-router-dom"
import { useLang } from "../context/LangContext"
import { useMemo } from "react"
import { localize } from "../utils/Translation"

const CTA = () => {

    const { lang } = useLang()

    const heroText = useMemo(() => localize(lang, 'herotext'), [lang])
    const contactText = useMemo(() => localize(lang, 'contact_text'), [lang])

  return (
    <section className='cta'>
      <p className='cta-text'>
        {heroText.socials[0]} <br className='sm:block hidden' />
        {heroText.socials[1]}
      </p>
      <Link to='/contact' className='btn'>
        {contactText.contact_text}
      </Link>
    </section>
  )
}

export default CTA