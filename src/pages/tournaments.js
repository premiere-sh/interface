import Header from 'components/Header'
import Footer from 'components/Footer'
import { Column } from 'components/common'
import Tournament from 'components/Tournament'

const tournament = {
  game: 'csgo',
  region: 'USA + Europe',
  title: '5v5 | Search & Destroy | FACEIT',
  summary: `This is where a summary of the featured tournament will go. This is
    where a summary of the featured tournament will go. This is where a summary
    of the featured tournament will go. This is where a summary of the featured
    tournament will go. This is where a summary of the featured tournament will
    go.`,
  date: '24/08/2021',
  time: '9:15pm',
  prize: '$1,250'
}

export default function Tournaments() {
  return (
    <Column> 
      <Header />
      <Tournament tournament={tournament} />
      <Footer />
    </Column>
  )
}

