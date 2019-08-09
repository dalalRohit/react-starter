import React from 'react'
import classes from './Backdrop.css';

export default function Backdrop(props) {
    return (
        <div onClick={props.click}
            style={{ display: props.show ? 'block' : 'none' }}
            className={classes.Backdrop}>

        </div>
    )
}
