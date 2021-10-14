import Header from 'components/Header'
import Teams from 'components/Teams'
import Footer from 'components/Footer'
import SocialsSection from 'components/SocialsSection'
import ProfileTop from 'components/ProfileTop'

export default function profile() {
  return (
    <div>
      <Header/>
      <ProfileTop/>
      <Teams/>
      <div style={{marginBottom: 152, marginTop: 152}}>
        <SocialsSection/>
      </div>
      <Footer/>
    </div>
  )
}
