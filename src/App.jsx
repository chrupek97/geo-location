import { useState } from 'react';
import Head from './Head';
import ResultBox from './ResultBox';

const App = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (ip) => {
    setIsLoading(true);
    const url = `https://geo.ipify.org/api/v2/country?apiKey=at_GraAFI0jDrXZiFkbVBSdIB0P6SQrj&ipAddress=${ip}`
    const response = await fetch(url);
    if (!response.ok) {
      setResult({
        isp: 'N/D',
        ipAddress: 'N/D',
        location: 'N/D',
        timezone: 'N/D'
      })
    } else {
      const result = await response.json()
      const { location, isp, ip } = result;
      setResult({
        isp: isp,
        ipAddress: ip,
        location: location.region,
        timezone: location.timezone
      })
    }
    setIsLoading(false)
  }

  return <div className='content'>
    <Head setData={setResult} fetchData={fetchData} />
    {(result && !isLoading) && <ResultBox result={result} />}
    {isLoading && <div className='loader-text'>Loading data</div>}
  </div>
}

export default App;
