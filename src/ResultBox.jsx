const ResultBox = (props) => {
    const { ipAddress, location, timezone, isp } = props;
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
            <div className='result-box--info'>{timezone}</div>
        </div>
        <div>
            <div className='result-box--title'>ISP</div>
            <div className='result-box--info'>{isp}</div>
        </div>
    </div>
}

export default ResultBox;