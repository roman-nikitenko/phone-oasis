import { Outlet } from 'react-router';
import { Header } from './components/Header/Header.tsx';
import { Footer } from './components/Footer/Footer.tsx';

function App() {

  return (
    <>
      <button className="main-button sm:w-[275px] flex items-center justify-center">Hello</button>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
