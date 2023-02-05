import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore/LearnMore';
import Register from './pages/Register';
import Login from './pages/Login';
import BandoraOne from './pages/Doctors/BandoraOne';
import CarolOne from './pages/Doctors/CarolOne';
import RoyOne from './pages/Doctors/RoyOne';
import MarrgridOne from './pages/Doctors/MarrgridOne';
import SusanOne from './pages/Doctors/SusanOne';
import HansOne from './pages/Doctors/HansOne';

import AngerSub from './pages/Problems/SubFolder/AngerSub';
import AnxietySub from './pages/Problems/SubFolder/AnxietySub';
import DepressionSub from './pages/Problems/SubFolder/DepressionSub';
import HypomaniaSub from './pages/Problems/SubFolder/HypomaniaSub';
import LonelinessSub from './pages/Problems/SubFolder/LonelinessSub';
import PanicAttacksSub from './pages/Problems/SubFolder/PanicAttacksSub';
import PsychosisSub from './pages/Problems/SubFolder/PsychosisSub';
import SchizoSub from './pages/Problems/SubFolder/SchizoSub';
import SelfEsteemSub from './pages/Problems/SubFolder/SelfEsteemSub';
import SelfHarmSub from './pages/Problems/SubFolder/SelfHarmSub';
import SleepProblemsSub from './pages/Problems/SubFolder/SleepProblemsSub';
import StressSub from './pages/Problems/SubFolder/StressSub';
import FormTwo from './pages/FormTwo';

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/learn-more' element={<LearnMore/>}/>
        <Route path='/bandora' element={<BandoraOne/>}/>
        <Route path='/carol' element={<CarolOne/>}/>
        <Route path='/roy' element={<RoyOne/>}/>
        <Route path='/margrid' element={<MarrgridOne />}/>
        <Route path='/susan' element={<SusanOne />}/>
        <Route path='/hans' element={<HansOne />}/>
        {/* !--Problems-->! */}
        <Route path='/anger' element={<AngerSub/>}/>
        <Route path='/anxiety' element={<AnxietySub />}/>
        <Route path='/depression' element={<DepressionSub />}/>
        <Route path='/hypomania' element={<HypomaniaSub />}/>
        <Route path='/lonelinenss' element={<LonelinessSub />}/>
        <Route path='/panicAttack' element={<PanicAttacksSub />}/>
        <Route path='/psychosis' element={<PsychosisSub />}/>
        <Route path='/schizo' element={<SchizoSub />}/>
        <Route path='/selfEsteem' element={<SelfEsteemSub />}/>
        <Route path='/selfHarm' element={<SelfHarmSub />}/>
        <Route path='/sleepProblems' element={<SleepProblemsSub />}/>
        <Route path='/stress' element={<StressSub />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/form' element={<FormTwo />}/>
        
    </Routes>
    )
}

export default Routers
