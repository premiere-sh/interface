import Header from 'components/Header'
import Teams from 'components/Teams'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import ProfileTop from 'components/ProfileTop'
import EventHistory from 'components/EventHistory'

export default function profile() {
  return (
    <div>
      <Header/>
      <ProfileTop/>
      <EventHistory/>
      <div style={{marginBottom: 152, marginTop: 352}}>
        <SocialsSection/>
      </div>
      <Footer/>
    </div>
  )
}
