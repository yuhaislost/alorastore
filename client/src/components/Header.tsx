import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aloravuelogo from '../assets/images/aloravuelogo.svg';
import blankuser from '../assets/images/blankuser.webp';
import {MagnifyingGlassIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/24/outline';

const Header = () => {
  const session = false;

  return (
    <header className='sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4'>
      <div className='flex items-center justify-center md:w-1/5'>
        <Link href="/">
          <div className='relative h-10 w-10 cursor-pointer opacity-75 transition hover:opacity-100'>
              <Image src={aloravuelogo} layout='fill' objectFit='contain' alt='AloraVue Logo (Home)'/>
          </div>
        </Link>
      </div>
      <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
        <a className='headerLink'>Product</a>
        <a className='headerLink'>Explore</a>
        <a className='headerLink'>Support</a>
        <a className='headerLink'>Business</a>
      </div>
      <div className='flex items-center justify-center gap-x-5 md:w-1/5'>
        <MagnifyingGlassIcon className='headerIcon'/>
        <Link href="/checkout">
          <div className='relative cursor-pointer '>
            <span className='absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white'>5</span>
            <ShoppingBagIcon className='headerIcon'/>
          </div>
        </Link>
        {session ? (
          <Image src={/* session.user?.image  || */blankuser} alt="Profile Image" className='cursor-pointer rounded-full' width={34} height={34}/>
        ) : (
          <UserIcon className='headerIcon'/>
        )}
      </div>
    </header>
  )
}

export default Header;