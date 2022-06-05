import './App.css';
import Personajes from './components/personajes';

function App() {
  return (
    <div>
      <img 
        src={'https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVDCqfY6MmG6BJjO9v_vTUyJEW_KmdUSuXhTKq8iZHHibxHWJDNwkyzKh8SI3scwt57yuA0gyWtpk6Yb1WT7Jjl0Tj4HoszEEpxri5NNDRbr.png?r=d7f'} 
        className='banner'
      />
      <Personajes />
    </div>
  );
}

export default App;
