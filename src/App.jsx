import Table from './components/Table'
import './App.css'
import {Link} from 'react-router-dom';
const App =()=>{
  return (
    <div className='directions'>
      <header className='title'> Departures </header>
      <Table/>
    <Link to="arrivals" className='title'>Check Out Our Arrivals</Link>
    </div>
  )
}

export default App
