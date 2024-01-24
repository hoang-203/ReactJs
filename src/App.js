import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <main className='h-25 bg-red-300'>
      <img src={logo} className="App-logo" alt="logo" />

        <h2 className='bg-green-300'>chào</h2>
      </main>
    </div>
  );
}

export default App;
