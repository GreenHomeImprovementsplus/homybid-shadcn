import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import LoginPage from "@/pages/loginPage/index.jsx";

function App() {
    return (
        <>
            {/*<Navbar/>*/}
            <main className='h-screen '>
                <LoginPage/>
            </main>
        </>
    );
}

export default App;
