import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]'>
      <img onClick={() => navigate('/')} className='w-20 cursor-pointer' src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-15cc-51f6-b6db-cea3c24338b0/raw?se=2025-04-06T15%3A06%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=4c673ce6-5a42-5d71-a969-bd5d7cac4f03&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-06T07%3A22%3A36Z&ske=2025-04-07T07%3A22%3A36Z&sks=b&skv=2024-08-04&sig=go8ebSYKRW/pok%2BSbMoFRE/e%2BOsT3OyDk/IKmBcHPfM%3D" alt="" />
      <ul className='md:flex items-start gap-5 font-medium hidden'>
        <NavLink to='/' >
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors' >
          <li className='py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/about' >
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact' >
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>

      <div className='flex items-center gap-4 '>
        {
          token && userData
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={logout} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

        {/* ---- Mobile Menu ---- */}
        <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img src={assets.logo} className='w-36' alt="" />
            <img onClick={() => setShowMenu(false)} src={assets.cross_icon} className='w-7' alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowMenu(false)} to='/'><p className='px-4 py-2 rounded full inline-block'>HOME</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/doctors' ><p className='px-4 py-2 rounded full inline-block'>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/about' ><p className='px-4 py-2 rounded full inline-block'>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowMenu(false)} to='/contact' ><p className='px-4 py-2 rounded full inline-block'>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar