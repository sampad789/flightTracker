import Table from './Table'
import {Link} from 'react-router-dom';
const Arrivals = () => {
  return (
<div className='directions'>
      <header className='title'> Arrivals </header>
      <Table />
    <Link to="/" className='title'>Check Out Our Departures</Link>
    </div>
  )
}

export default Arrivals;