import { useEffect } from 'react'
import { motion, useAnimate, useInView } from 'framer-motion'
import { testimonials } from '../assets'

const TestimonialCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
  }) => {
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
              { delay: index * 0.5 },
            ],
            [
              'div',
              {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              },
              { delay: index * 0.5 },
            ],
            [
              'div',
              {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px)',
              },
              { delay: index * 0.5 },
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
              { delay: 0.5 },
            ],
            [
              'div',
              {
                opacity: 0,
                scale: 0,
                filter: 'blur(20px)',
              },
              { delay: index * 0.5 },
            ],
            [
              'div',
              {
                opacity: 0,
                scale: 0,
                filter: 'blur(20px)',
              },
              { delay: index * 0.5 },
            ],
          ])
    }, [isInView])
  
    return (
      <div ref={scope}>
        <motion.div
          initial={{ opacity: 0, scale: 0, filter: 'blur(20px)' }}
          className="neo-brutalism-blue p-[1px] rounded-[20px] py-5 px-12 h-auto flex justify-evenly items-center flex-row w-full"
        >
            <img 
                src={testimonials}
                alt='feedback icon'
                className = 'absolute -top-10 left-0'
            />
  
          <div className="mt-1">
            <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
  
            <div className="mt-7 flex justify-between items-center gap-1">
              <div className="flex-1 flex flex-col">
                <p className="text-white font-medium text-[16px]">
                  <span className=" blue-text-gradient">@</span> {name}
                </p>
                <p className="mt-1 text-secondary text-[12px]">
                  {designation}, {company}
                </p>
              </div>
              <img
                src={image}
                alt={`feedback-by-${name}`}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  export default TestimonialCard