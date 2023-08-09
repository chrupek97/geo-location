const ResultBox = ({ result }) => {
    const { ipAddress, location, timezone, isp } = result;
    
    return <div className='result-box'>
        <div>
            <div className='result-box--title'>IP ADDRESS</div>
            <div className='result-box--info'>{ipAddress}</div>
        </div>
        <div>
            <div className='result-box--title'>LOCATION</div>
            <div className='result-box--info'>{location}</div>
        </div>
        <div>
            <div className='result-box--title'>TIMEZONE</div>
            <div className='result-box--info'>UTC {timezone}</div>
        </div>
        <div>
            <div className='result-box--title'>ISP</div>
            <div className='result-box--info'>{isp}</div>
        </div>
    </div>
}

export default ResultBox;