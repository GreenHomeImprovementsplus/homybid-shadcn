import Header from './header';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='p-4'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
