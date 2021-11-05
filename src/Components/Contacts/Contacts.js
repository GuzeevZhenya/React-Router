import React from 'react';
import { useHistory } from "react-router-dom";

export default function Contacts() {
    const history = useHistory();
    return (
        
        <div>
            <button onClick={() => history.push("/main")}>Go back</button>
            <p>tel:+34353453452352</p>
            <p>mail:rergerg@mail.ru</p>
            <p>skype:3434t43@mail.ru</p>
        </div>
    )
}
