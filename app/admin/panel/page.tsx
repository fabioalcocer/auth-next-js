'use client'
import Button from '@elements/Button'
import { useState } from 'react'

const page = () => {
  return (
    <div className='p-5'>
      <p className='flex justify-center items-center p-5 text-red-500 text-lg font-bold'>
        This Is The Admin Panel. Only Admin Users Can Access This.
      </p>
    </div>
  )
}

export default page
