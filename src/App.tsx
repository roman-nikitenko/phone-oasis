import { Outlet } from 'react-router';
import { Navigation } from './components/Navigation.tsx';
import { Footer } from './components/Footer.tsx';

function App() {

  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
