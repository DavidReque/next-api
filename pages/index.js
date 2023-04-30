"use client"
import Poke from '@/components/Poke'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <h1 className='flex justify-center items-center mb-9 font-bold text-2xl'>Unplash photos</h1>
      <Poke/>
    </div>
  )
}
