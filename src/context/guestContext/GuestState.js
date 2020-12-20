import React, { useReducer } from 'react';
import GuestContext from './guestContext';
import guestReducer from './guestReducer';

const GuestState = (props) => {
    const initialState = {
        guests : [
            {
                id: 1,
                name: "Raju",
                phone: 9813465748,
                diatery: "veg",
                isConformed: false
            },
            {
                id: 2,
                name: "Ram",
                phone: 9809876748,
                diatery: "non-veg",
                isConformed: true
            },
            {
                id: 3,
                name: "Pandey",
                phone: 9813465568,
                diatery: "veg",
                isConformed: true
            }
        ]
    }
    const [state, dispatch] = useReducer(guestReducer, initialState);
    return (
        <GuestContext.Provider value={{guests:state.guests}}>
            {props.childern}
        </GuestContext.Provider>
    )
}

export default GuestState;
