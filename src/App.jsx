import Navbar from './components/navbar/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
      <Navbar />
      <main className='p-4'>
        <Homepage />
      </main>
    </>
  );
}

export default App;
