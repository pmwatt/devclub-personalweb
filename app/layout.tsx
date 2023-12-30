import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import { myFont } from './fonts'


export const metadata: Metadata = {
  title: 'Pao Devclub Portfolio',
  description: 'A very professional website',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <body className={myFont.className}>
        <div className='bg-black text-white h-full'>
          <nav>
            <ul className='flex gap-4 p-5'>
              <li><a className=' hover:bg-gray-800 py-3 px-6 m-1 rounded-full' href="/">Home</a></li>
              <li><a className=' hover:bg-gray-800 py-3 px-6 m-1 rounded-full' href="/about">About</a></li>
              <li><a className=' hover:bg-gray-800 py-3 px-6 m-1 rounded-full' href="/contact">Contact</a></li>
            </ul>
          </nav>
          <div className='flex flex-col items-center m-10'>
            <Providers>{children}</Providers>
          </div>
          <footer className='py-20'>
            <p className='text-center'>Copyright 2023 Prachnachai Meakpaiboonwattana All Rights Reserved</p>
          </footer>
        </div>
      </body>
    </html>
  )
}