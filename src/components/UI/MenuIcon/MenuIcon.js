import React from 'react'
import { MdMenu } from 'react-icons/md';
import classes from './MenuIcon.css';

export default function MenuIcon(props) {
    return (
        <div
            onClick={props.click}
            style={{ cursor: 'pointer' }}
            className={classes.Icon}>
            <MdMenu size={30} />
        </div>
    )
}
