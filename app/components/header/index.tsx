"use client";

import Image from 'next/image';
import Button from '@/app/components/button';

export default function Header() {
  return (
    <header className="bg-dark-green gap-6 py-5.5 px-10 flex items-center">
        <div className="logo flex items-center gap-2 mr-auto">
          <img src="/logo/logo.png" alt="logo" />
          <p className='text-white text-lg font-semibold tracking-normal'>Bulltrack</p>
        </div>
        <Button 
            position="right"
            text="La soledad"
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
            }
            onChange={() => {}}
            type="secondary"
        />
        <div className="relative">
          <Image src="/user/avatar.png" alt="bulltrack user" className="rounded-full w-14" width={56} height={56} />
          <div className='w-4 h-4 bg-green-100 border-2 border-white rounded-full absolute -mt-4 ml-10'></div>
        </div>
    </header>
  )
};