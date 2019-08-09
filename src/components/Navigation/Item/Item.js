import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Item(props) {

    return (
        <li>
            <NavLink
                to={props.to}
                onClick={props.click ? props.click : null} >{props.name}</NavLink>
        </li>
    )
}
