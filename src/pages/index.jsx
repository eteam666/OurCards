import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Build Your Site</title>
        <meta
          name="description"
          content="构建你的网站"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}
