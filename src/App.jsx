import Head from './Head'
import ResultBox from './ResultBox';

const App = () => {
  return <div className='content'>
    <Head />
    <ResultBox ipAddress='192.167.1.1' location='Brooklyn, Ny 10001' timezone='UTC-05:00' isp='SpaceX Starlink' />
    <div id="map"></div>
  </div>
}

export default App;
