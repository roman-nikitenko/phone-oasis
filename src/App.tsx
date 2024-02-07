import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header.tsx';
import { Footer } from 'components/Footer/Footer.tsx';

function App() {
  return (
    <div className="min-h-screen relative">
      <Header />
      <div className="pb-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
