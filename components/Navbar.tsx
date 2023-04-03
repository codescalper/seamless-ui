import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row  justify-between items-center px-20 py-5'>
        <div className='flex justify-center items-start '>
                    <div className='flex items-center h-fit -ml-8 md:ml-0'>
                        <img src='/seamless-ui 2.png' className='h-20 w-20 ' draggable={false}/>
                       
                        <h1 className='text-3xl text-white  whitespace-nowrap'>SeamLess UI</h1>
                    
                    </div>
                </div>
                <div className='flex gap-7 text-xl mt-2 md:mt-0 '>
                  <Link href='/docs/getting-started' >    
                    <p className=' text-white hover:text-[#7EE787] transition-all cursor-pointer '>Docs</p>       
                  </Link>
                    <p className='text-white hover:text-[#7EE787] transition-all cursor-pointer '>Blogs</p>
                    <p className='text-white hover:text-[#7EE787] transition-all cursor-pointer'>Showcase</p>
                    <a href='https://github.com/Clueless-Community/seamless-ui' target={'_blank'} rel="noreferrer">
                    <img src='/Github .png' draggable={false}  />
                    </a>
                </div>
    </div>
  )
}

export default Navbar