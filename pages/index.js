"use client"
import Poke from '@/components/Poke'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Poke/>
    </div>
  )
}
