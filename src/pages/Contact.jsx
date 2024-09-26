import emailjs from "@emailjs/browser"
import { Canvas } from "@react-three/fiber"
import { Suspense, useMemo, useRef, useState } from "react"

import useAlert from "../hooks/useAlert"
import { Alert, SuspenseVisual, Togler } from "../components"
import { useLang } from '../context/LangContext'
import NataliAvatar from "../models/NataliAvatar"
import { localize } from "../utils/Translation"
import { Link } from "react-router-dom"

const Contact = () => {

  const formRef = useRef()
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const { alert, showAlert, hideAlert } = useAlert()
  const [loading, setLoading] = useState(false)
  const [mailContact, setMailContact] = useState(true)
  const [currentAnimation, setCurrentAnimation] = useState("idle")

  const { lang } = useLang()

  const contactText = useMemo(() => localize(lang, 'contact_text'), [lang])
  const toglerTexts = useMemo(() => localize(lang, 'toglerTexts'), [lang])
  const platforms = useMemo(() => localize(lang, 'platforms'), [lang])

  console.log('PLATFORMS - ', platforms)

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleFocus = () => setCurrentAnimation("greating")
  const handleBlur = () => setCurrentAnimation("thankful")

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setCurrentAnimation("hiphopdancing")

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        
        {
          from_name: form.name,
          to_name: 'Nataly',
          from_email: form.email,
          to_email: 'matveeva-natali@list.ru',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false)
          showAlert({
            show: true,
            text:  `${contactText.alert_message_sent} 😃`,
            type: "success",
          })

          setTimeout(() => {
            hideAlert(false)
            setCurrentAnimation("idle")
            setForm({
              name: "",
              email: "",
              message: "",
            })
          }, [3000])
        },
        (error) => {
          setLoading(false)
          console.error(error)
          setCurrentAnimation("idle")

          showAlert({
            show: true,
            text: `${contactText.alert_message_wrong} 😢`,
            type: "danger",
          })
        }
      )
  }

  return (
    <section className='relative w-full h-screen'>
      {alert.show && <Alert {...alert} />}
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 55,
          near: 0.1,
          far: 1000,
        }}
      >
        <directionalLight position={[0, 0, 1]} intensity={2.5} />
        <ambientLight intensity={1} />
        <pointLight position={[5, 10, 0]} intensity={2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />

        <Suspense fallback={<SuspenseVisual />}>
          <NataliAvatar
            animation={currentAnimation}
            position={[1, -12, 0]}
            rotation={[12.629, -0.6, 0]}
            scale={[8, 8, 8]}
          />
        </Suspense>
      </Canvas>
      <div className='fixed top-1/4 sm:right-1/2 inset-16 sm:min-w-[40%] min-w-[80%] rounded-sm h-[60%] glassmorphism drop-shadow-md p-10 flex flex-col overflow-auto scrollbar-hide'>
        <div className = 'flex sm:flex-row flex-wrap justify-between'>
          <h1 className='head-text'>{contactText.get_in_touch}</h1>
          <Togler labelTexts = {toglerTexts} value = {mailContact} setOnFunction = {setMailContact} />
        </div>
        {
          mailContact ? 
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-3 mt-10'
          >
            <label className='text-black-500 font-semibold'>
              {contactText.form_your_name}
              <input
                type='text'
                name='name'
                className='input'
                placeholder={contactText.form_your_name_placeholder}
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
            {contactText.form_your_email}
              <input
                type='email'
                name='email'
                className='input'
                placeholder={contactText.form_your_email_placeholder}
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className='text-black-500 font-semibold'>
              {contactText.form_your_message}
              <textarea
                name='message'
                rows='4'
                className='textarea'
                placeholder={contactText.form_your_message_placeholder}
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type='submit'
              disabled={loading}
              className='btn'
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? contactText.form_sending_message : contactText.form_sent_message}
            </button>
          </form>
          :
          <div className='mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-7 lg:gap-7 mx-auto'>
          {platforms.map((platform, i) => (
            <Link 
              to={platform.link} 
              target='_blank'
              rel='noopener noreferrer' 
              className='block-container w-20 h-20 cursor-pointer select-none' 
              key={platform.name}
            >
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={platform.icon}
                  alt={platform.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </Link>
          ))}
          </div>
        }
      </div>
    </section>
  )
}

export default Contact