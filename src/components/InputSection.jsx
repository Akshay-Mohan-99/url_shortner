import React from 'react'

const InputSection = () => {
  return (
    <div className='p-20 w-screen'>
        <h1 className='text-3xl text-slate-800' >URL Shortner</h1>
        <input type="text"  className='rounded-full w-full h-10 text-xl mt-4 px-9 p-6 text-slate-600 focus:ring-1 focus:outline-none focus:border-slate-300 focus:ring-slate-300'/>
    </div>
  )
}

export default InputSection