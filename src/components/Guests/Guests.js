import React,{useContext} from 'react'
import Guest from './Guest'
import GuestContext from '../../context/guestContext/GuestContext';

const Guests = () => {
    const {guests} = useContext(GuestContext);
    return (
        <div className="guests">
            {guests.map(guest => <Guest key={guest.id} guest={guest}  />)}
        </div>
    )
}

export default Guests
