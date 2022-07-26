import React from 'react'

const TableEntry = () => {
  return (
    <div className='p-20'>
        
        <table className='w-full'>
            <tbody>
                <tr className='bg-slate-200'>
                    <th align='left' className='p-4'>SR No.</th>
                    <th align='left' className='p-4'>Original URL</th>
                    <th align='left' className='p-4'>Short URL</th>
                </tr>
                
                <tr>
                    <td className='p-4'>1</td>
                    <td className='p-4 cursor-pointer'>
                        <a className='text-slate-900 hover:text-slate-400' target="_blank" rel="noopener noreferrer" href="https://www.google.com">https://www.google.com</a>
                    </td>
                    <td className='p-4 cursor-pointer'>
                        <a className='text-slate-900 hover:text-slate-400' target="_blank" rel="noopener noreferrer" href="https://www.google.com">xyzabc</a>
                    </td>
                </tr>
                
            </tbody>
        </table>
        
    </div>
  )
}

export default TableEntry