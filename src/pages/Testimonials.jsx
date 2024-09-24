import React, { useMemo } from 'react'
import { useLang } from '../context/LangContext'
import { localize } from '../utils/Translation'
import { CTA, TestimonialCard } from '../components'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

function Testimonials() {

  const { lang } = useLang()
  const testiomnials_text = useMemo(
    () => localize(lang, 'testimonials_text'),
    [lang]
  )
  const testimonials = useMemo(() => localize(lang, 'testimonials'), [lang])

  return (
    <section className='max-container'>
      <AnimatePresence key = {'TestimonialsPage'}>
        <motion.div key={'headTestimonials'} {...textVariant()}>
          <h1 className='head-text'>{testiomnials_text.what_others_say}</h1>
          <h2 className='blue-gradient_text font-semibold drop-shadow'>
            {testiomnials_text.testiomnials_text}
          </h2>
        </motion.div>
        <motion.div 
          key={'promtTestimonials'} 
          {...fadeIn(0.8, 1.8, 'spring')} 
          className='mt-5 flex flex-col gap-3 text-slate-500'
        >
          {testiomnials_text.testimonials_promt}
        </motion.div>
      </AnimatePresence>
      <div className="grid grid-cols-1 mx-auto gap-12 mt-10">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
      <CTA />
    </section>
  )
}

export default Testimonials