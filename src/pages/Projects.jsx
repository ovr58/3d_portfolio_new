import { Link } from "react-router-dom"

import { CTA } from "../components"
import { useLang } from "../context/LangContext"
import { localize } from "../utils/Translation"
import { useMemo } from "react"
import { arrow } from "../assets"

const Projects = () => {

  const { lang } = useLang()

  const workText = useMemo(() => localize(lang, 'work_text'), [lang])
  const projects = useMemo(() => localize(lang, 'projects'), [lang])
  const heroText = useMemo(() => localize(lang, 'herotext'), [lang])

  return (
    <section className='max-container'>
      <h1 className='head-text'>
        {workText.my_work_header}{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          {workText.my_work_header1}
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
      {workText.my_work_intro}
      </p>

      <div className='grid grid-cols-1  lg:grid-cols-2 gap-4 mt-10'>
        {projects.sort(() => Math.random() - 0.5).map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
            <div className='block-container mx-auto w-96 h-96'>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.image}
                  alt='threads'
                  className='w-3/4 h-3/4 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.source_code_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  {heroText.learnMore}
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
              
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  )
}

export default Projects