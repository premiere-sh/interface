import Image from 'next/image'

// TODO add links here

export function Discord() {
  return <Image src={'/dc.svg'} width={102} height={102} />
}

export function Instagram() {
  return <Image src={'/ig.svg'} width={47} height={47} />
}

export function Twitter() {
  return <Image src={'/twitter.svg'} width={47} height={47} />
}

export function Telegram() {
  return <Image src={'/tg.svg'} width={47} height={47} />
}

export function Youtube() {
  return <Image src={'/yt.svg'} width={47} height={47} />
}

export function SocialsDivider() {
  return <Image src={'/socials_divider.svg'} height={124} width={1.5} />
}

