"use client";

import { Button } from '@/components/ui/button'
import { SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
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
  const { user } = useUser()

  const path = usePathname()

  return (
    <div className='flex justify-between items-center p-4'>
        {/* Logo */}
        <Link href={'/'}>
            <div className="flex gap-2 items-center">
                <Image src={'/logo.svg'} alt='logo' width={30} height={30} />
                <h2 className='font-bold text-2xl'>TripForger</h2>
            </div>
        </Link>
        

        {/* Menu Items */}
        <div className="flex gap-5 items-center">
            {menuOptions.map((menu, index) => (
                <Link key={index} href={menu.path}>
                    <h2 className='text-lg hover:scale-105 transition-all hover:text-primary'>{menu.name}</h2>
                </Link>
            ))}
        </div>

        {/* Menu Options */}
        <div className="flex gap-5 items-center">
            {
                !user  ? (
                    <SignInButton mode='modal'>
                        <Button>Get Started</Button>
                    </SignInButton>
                ) : (
                    path == '/create-new-trip' ? <Link href={'/my-trips'}>
                        <Button>My Trips</Button>
                    </Link> : <Link href={'/create-new-trip'}>
                        <Button>Forge a Trip</Button>
                    </Link>
                )
            }
            <UserButton />
        </div>
    </div>
  )
}

export default Header