import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header.tsx';
import { Footer } from 'components/Footer/Footer.tsx';

function App() {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
