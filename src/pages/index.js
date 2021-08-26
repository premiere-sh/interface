import LogoHeader from 'components/LogoHeader'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LogoHeader />

      <footer></footer>
    </div>
  )
}
