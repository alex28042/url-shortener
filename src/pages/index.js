import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/Layout'
import UrlHandler from '@/components/HomePage/UrlHandler'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <main className='flex flex-col w-full items-center'>
        <h1 className='font-bold text-4xl mb-32'>Short URL</h1>
        <UrlHandler />
      </main>
    </Layout>
  )
}
