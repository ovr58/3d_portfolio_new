import React from 'react'

const Togler = ({labelTexts, value, setOnFunction}) => {
  return (
    <div className="inline-flex items-center hover:cursor-pointer">
        <input 
            type="checkbox" 
            value={value} 
            onChange={() => setOnFunction(!value)} 
            className="sr-only peer" id="exampleCheck3" 
        />
        <label
            className='
                relative
                mr-2
                ml-2
                sm:w-6
                sm:h-11
                sm:min-w-6
                w-4
                h-7
                bg-gray-200
                peer-focus:outline-none 
                peer-focus:ring-4 
                peer-focus:ring-blue-300 
                rounded-full peer 
                peer-checked:after:translate-y-full 
                peer-checked:after:border-white 
                peer-checked:after:bg-white 
                after:content-[""] 
                after:absolute 
                after:top-[2px] 
                after:start-[2px]
                after:bg-blue-600
                after:border-gray-300
                after:border 
                after:rounded-full
                sm:after:h-5
                sm:after:w-5 
                after:h-3
                after:w-3 
                after:transition-all 
                peer-checked:bg-blue-600
                hover:cursor-pointer'
            htmlFor='exampleCheck3'
        ></label>
        <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer mr-3"
            htmlFor='exampleCheck3'
        >
        {value ? 
            labelTexts[0]
            : labelTexts[1]}
        </label>
    </div>
  )
}

export default Togler