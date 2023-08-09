import { useState } from "react";

const Head = ({ fetchData }) => {
    const [addressIp, setAddressIp] = useState('')

    const onChange = (e) => {
        const value = e.target.value;
        setAddressIp(value);
    }

    const onClick = async () => {
        fetchData(addressIp)
    }

    return <div className='head'>
        <h1 className='header'>IP Address Tracker</h1>
        <div className='d-row'>
            <input type='text' className='input search-input' placeholder="Search for any IP address or domain" onChange={onChange} />
            <button className='btn btn-primary' onClick={onClick}>&gt;</button>
        </div>
    </div>
}

export default Head;