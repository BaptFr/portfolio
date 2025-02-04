
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Blur from '/assets/images/blur1.webp';


function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === '/'; //To Hide the Header

  return (
    <div >
      <div>
        <img src={Blur} className='background-image-blur absolute'/>
        {!isLandingPage && (
        <div className='header-fixed'>
        <Header />
        </div>)}
        <div>
        <Suspense>
          <Outlet />
        </Suspense>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App;