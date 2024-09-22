import { useMemo } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { localize } from '../utils/Translation'
import { fadeIn, textVariant } from '../utils/motion'
import { useLang } from '../context/LangContext'
import { ServiceCard } from '../components'

const About = () => {
  const { lang } = useLang()
  const intro = useMemo(() => localize(lang, 'intro'), [lang])
  const services = useMemo(() => localize(lang, 'services'), [lang])

  return (
    <section className='max-container'>
      <AnimatePresence key = {'AboutPage'}>
        <motion.div key={'headOfAbout'} {...textVariant()}>
          <h1 className='head-text'>{intro.introheader1}</h1>
          <h2 className='blue-gradient_text font-semibold drop-shadow'>
            {intro.introheader2}
          </h2>
        </motion.div>
        <motion.div key={'promtOfAbout'} {...fadeIn('', '', 0.1, 1)} className='mt-5 flex flex-col gap-3 text-slate-500'>{intro.introtext}</motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default About