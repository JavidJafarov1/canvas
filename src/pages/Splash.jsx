import React from 'react'
import { useNavigate } from 'react-router-dom'

const Splash = () => {
    const navigate = useNavigate();
    return (
        <div 
          className='bg-[#0B0E21] max-w-[375px] mx-auto w-full h-screen flex items-center justify-center relative cursor-pointer'
          onClick={() => navigate('/home')}
        >
            <img src='/assets/images/logo.png' alt='logo' />
            <p className='BRSonoma text-white absolute bottom-[74px]'>PR GRAM</p>
        </div>
    )
}

export default Splash