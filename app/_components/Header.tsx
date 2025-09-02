import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const menuOptions = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Pricing',
        path: '/pricing'
    },
    {
        name: 'Contact us',
        path: '/contact-us'
    }
]

const Header = () => {
  return (
    <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <div className="flex gap-2 items-center">
            <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
            <h2 className='font-bold text-2xl'>TripForger</h2>
        </div>

        {/* Menu Items */}
        <div className="flex gap-5 items-center">
            {menuOptions.map((menu, index) => (
                <Link key={index} href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
                </Link>
            ))}
        </div>

        {/* Menu Options */}
        <Button>Get Started</Button>
    </div>
  )
}

export default Header