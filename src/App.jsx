
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import TermsAndConditions from './Pages/TermsAndConditions'
import PrivacyPolicy from "./Pages/PrivacyPolicy";



const App = () => {


  return (

    <div>

      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/terms-and-conditions' exact element={<TermsAndConditions/>} />
          <Route path='/privacy-policy' exact element={<PrivacyPolicy/>} />
        </Routes>
      </Router>


    </div>

  )

}


export default App
