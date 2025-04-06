import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-20' src="https://sdmntpreastus2.oaiusercontent.com/files/00000000-15cc-51f6-b6db-cea3c24338b0/raw?se=2025-04-06T15%3A06%3A52Z&sp=r&sv=2024-08-04&sr=b&scid=4c673ce6-5a42-5d71-a969-bd5d7cac4f03&skoid=2f36945c-3adc-4614-ac2b-eced8f672c58&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-06T07%3A22%3A36Z&ske=2025-04-07T07%3A22%3A36Z&sks=b&skv=2024-08-04&sig=go8ebSYKRW/pok%2BSbMoFRE/e%2BOsT3OyDk/IKmBcHPfM%3D" alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-8468938745</li>
            <li>vasuparashar18@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
