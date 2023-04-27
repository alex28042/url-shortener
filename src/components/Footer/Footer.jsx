import React from 'react'

function Footer() {
  return (
    <div className='fixed bottom-0 w-full flex flex-col items-center justify-center'>
      <div className='w-2/4 h-[1px] bg-gray-400 self-center'></div>
      <p className='text-gray-500 hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400 font-semibold tracking-tight mb-2 mt-1 text-center'>Made by Alejandro Alonso</p>
    </div>
  )
}

export default Footer