import React from 'react'
import trashImg from '../trash-can-solid.svg';

const TableEntry = ({entries,handleDel}) => {
  return (
    <div className='p-20'>
        
        <table className='w-full'>
            <tbody>
                <tr className='bg-slate-200'>
                    <th align='left' className='p-4'>SR No.</th>
                    <th align='left' className='p-4'>Original URL</th>
                    <th align='left' className='p-4'>Short URL</th>
                </tr>
                {entries.map((entry,i) => (
                    <tr key={i}>
                        <td className='p-4'>{i+1}</td>
                        <td className='p-4 cursor-pointer'>
                            <span className='text-slate-900 hover:text-slate-400' >{entry.longURL}</span>
                        </td>
                        <td className='p-4 '>
                            <div className='flex'>
                                <a className='text-slate-900 hover:text-slate-400 cursor-pointer' target="_blank" rel="noopener noreferrer" href={`http://localhost:8000/${entry.smallURL}`}>{entry.smallURL}</a>
                                <button onClick={() => handleDel(entry.smallURL)} className='ml-auto cursor-pointer hover:animate-bounce ease-in duration-30 bg-slate-300 p-3 rounded-full'><img  alt='trash' src={trashImg} height ="10rem" width="20rem"/></button>
                            </div>
                        </td>
                    </tr>
                ))}
                
                
            </tbody>
        </table>
        
    </div>
  )
}

export default TableEntry