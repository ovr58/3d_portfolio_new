import { useMemo, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { localize } from '../utils/Translation'
import { fadeIn, textVariant } from '../utils/motion'
import { useLang } from '../context/LangContext'
import { ServiceCard } from '../components'

const About = () => {
  const { lang } = useLang()
  const intro = useMemo(() => localize(lang, 'intro'), [lang])
  const services = useMemo(() => localize(lang, 'services'), [lang])
  const skills = useMemo(() => localize(lang, 'technologies'), [lang])

  const [selected, setSelected] = useState(-1)

  return (
    <section className='max-container'>
      <AnimatePresence key = {'AboutPage'}>
        <motion.div key={'headOfAbout'} {...textVariant()}>
          <h1 className='head-text'>{intro.introheader1}</h1>
          <h2 className='blue-gradient_text font-semibold drop-shadow'>
            {intro.introheader2}
          </h2>
        </motion.div>
        <motion.div key={'promtOfAbout'} {...fadeIn(0.8, 1.8, 'spring')} className='mt-5 flex flex-col gap-3 text-slate-500'>{intro.introtext}</motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-12'>
          {skills.map((skill, i) => (
            <div className='block-container w-20 h-20 cursor-pointer select-none' onClick={() => setSelected(i)} key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
        {selected >= 0 && 
        (
          <AnimatePresence key = {'SkillsPage'}>
            <motion.div 
              key={'skillAbout'} 
              {...fadeIn(0.8, 1.8, 'spring')} 
              className="fixed inset-16 flex items-center justify-center"
              onClick={() => setSelected(-1)}
            >
              <div className="glassmorphism z-10 rounded-lg p-6 shadow-gray-400">
                <div className="flex items-center justify-between">
                  <h5 className="mb-2 text-xl text-black font-medium">
                    {skills[selected].name}
                  </h5>
                  <button
                    type="button"
                    className="mb-2 z-10 w-10 p-2 bg-slate-700 rounded-full hover:shadow-inner hover:shadow-slate-950"
                    onClick={() => setSelected(-1)}
                  >
                    <h3 className="font-bold text-white">x</h3>
                  </button>
                </div>
                <p className="mb-4 text-base text-black">
                  {skills[selected].anotation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  )
}

export default About