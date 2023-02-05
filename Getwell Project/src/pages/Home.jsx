import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import HeadDecease from '../components/Heads/HeadDecease'
import HeadDocs from '../components/Heads/HeadDocs'
import Navbar from '../components/Navbar'
import PersonalDetails from '../components/PersonalDetails'
import Intro from '../components/Intro'
import DoctorItem from '../components/DoctorItem'
import ProblemTwo from '../components/ProblemTwo'
import Problems from '../components/Problems'
import { logOut } from './Services/Auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const logoutUser =()=>{
    logOut();
    navigate('/');
  }
  return (
    <div>
      <Announcement/>
      <Navbar logoutUser={logoutUser}/>
      <Intro/>
      <HeadDocs/>
      <DoctorItem/>
      <HeadDecease/>
      <ProblemTwo/>
      <Problems/>
      <PersonalDetails/>
      <Footer/>
    </div>
  )
}

export default Home
