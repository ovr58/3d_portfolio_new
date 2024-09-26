import React, { useMemo } from 'react'
import { Link } from "react-router-dom"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { useLang } from '../context/LangContext'
import { localize } from '../utils/Translation'
import "react-vertical-timeline-component/style.min.css"

function Expirience() {

  const { lang } = useLang()
  const experiences = useMemo(() => localize(lang, 'experiences'), [lang])
  const experienceHeader = useMemo(() => localize(lang, 'experience_header'), [lang])
  const contactText = useMemo(() => localize(lang, 'contact_text'), [lang])
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {experienceHeader[0]}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        {experienceHeader[1]}
      </div>
      <div className='mt-12 flex'>
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <VerticalTimelineElement
              key={`${experience.title}/${i}`}
              data={experience.date}
              iconStyle={{ background: experience.iconBg }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.action_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>
              }
              contentStyle={{
                borderBottom: "8px",
                borderStyle: "solid",
                borderBottomColor: experience.iconBg,
                boxShadow: "none",
              }}
            >
              <div>
                <h3 className='text-black text-xl font-poppins font-semibold'>
                  {experience.title}
                </h3>
                <p
                  className='text-black-500 font-medium text-base'
                  style={{ margin: 0 }}
                >
                  {experience.action_name}
                </p>
              </div>

              <ul className='my-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, pointIndex) => (
                  <li
                    key={`experience-point-${pointIndex}`}
                    className='text-black-500/50 font-normal pl-1 text-sm'
                  >
                    {point}
                    {
                      (i === 0 && pointIndex === 0) && 
                      (<Link to='/contact' className='btn absolute bottom-2 left-5 sm:top-5 sm:left-2/3 max-h-[40px] max-w-[100px] h-auto'>
                        {contactText.contact_text}
                      </Link>)
                    }
                    {point.includes('Boosty.to') && (
                      <Link
                        to="https://boosty.to/3dnataly"
                        className="animate-pulse underline"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="be with me on boosty"
                      >
                        {' '}
                        {experienceHeader[2]}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Expirience