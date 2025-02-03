import Header from './header';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ClientLayout;
