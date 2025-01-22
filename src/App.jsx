import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <main className='p-4'>
        <HomePage />
      </main>
    </>
  );
}

export default App;
