const Head = () => {
    return <div className='head'>
        <h1 className='header'>IP Address Tracker</h1>
        <div className='d-row'>
            <input type='text' className='input search-input' placeholder="Search for any IP address or domain" />
            <button className='btn btn-primary'>&gt;</button>
        </div>
    </div>
}

export default Head;