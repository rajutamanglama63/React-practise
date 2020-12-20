import React from 'react'
import GuestCounter from '../Guests/GuestCounter'
import GuestForm from '../Guests/GuestForm'
import Guests from '../Guests/Guests'
import GuestSearch from '../Guests/GuestSearch'

const Home = () => {
    return (
        <div className="home-container">
            <div className="search-component">
                <GuestSearch />
            </div>
            <div className="form-table-component">
                <div className="form-side">
                    <GuestForm />
                </div>
                <div className="table-side">
                    <GuestCounter />
                </div>
            </div>
            <div className="guest-component">
                <Guests />
            </div>
        </div>
    )
}

export default Home;
