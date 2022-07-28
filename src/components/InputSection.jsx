import React from 'react'

const InputSection = ({handleClick, setInputText, inputText}) => {
  return (
    <div className='p-20 w-screen'>
        <h1 className='p-5 text-3xl text-slate-800' >URL Shortner</h1>
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text"  className='rounded-full w-full h-10 text-xl mt-4 px-9 p-6 text-slate-600 focus:ring-1 focus:outline-none focus:border-slate-300 focus:ring-slate-300'/>
        <button className='mt-4 p-3 px-5 rounded-full bg-slate-600 text-white hover:bg-slate-400' type='button' onClick={() => handleClick()}>Submit</button>
    </div>
  )
}

export default InputSection