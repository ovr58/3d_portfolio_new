import { useEffect } from 'react'
import { Tilt } from 'react-tilt'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useLang } from '../context/LangContext'

const ServiceCard = ({ index, title, icon }) => {
  const { lang } = useLang()
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    isInView
      ? animate([
          [
            'div',
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            },
            { delay: index * 0.1 },
          ],
          [
            'div',
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            },
            { delay: index * 0.1 },
          ],
          [
            'div',
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
            },
            { delay: index * 0.1 },
          ],
        ])
      : animate([
          [
            'div',
            {
              opacity: 0,
              scale: 0,
              filter: 'blur(20px)',
            },
            { delay: index * 0.1 },
          ],
          [
            'div',
            {
              opacity: 0,
              scale: 0,
              filter: 'blur(20px)',
            },
            { delay: index * 0.1 },
          ],
          [
            'div',
            {
              opacity: 0,
              scale: 0,
              filter: 'blur(20px)',
            },
            { delay: index * 0.1 },
          ],
        ])
  }, [lang, isInView])

  return (
    <div ref={scope}>
      <motion.div
        initial={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
      >
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          reset: false
        }} 
        className="neo-brutalism-blue p-[1px] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col w-full"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </Tilt>
      </motion.div>
    </div>
  )
}

export default ServiceCard