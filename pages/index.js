import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from '@/comps/Hero'
import Link from 'next/link'
import LearnMore from '@/comps/LearnMore'
import Banner from '@/comps/Banner'
import SPDPRKHighlight from '@/comps/SPDPRKHighlight'
import SectorsLinks from '@/comps/SectorsLinks'
import Company from '@/comps/Company'
import Upgrade from '@/comps/Upgrade'

export default function Home() {
  return (
    <>
      <Head>
        <title>SPDPRK</title>
        <meta name="keywords" content="SPDPRK" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/scrollreveal"></script>
      </Head>
      <main className={styles.main}>
        <Hero />
        <SPDPRKHighlight />
        <SectorsLinks />
        <Company />
        <Upgrade />
      </main>
    </>
  )
}
