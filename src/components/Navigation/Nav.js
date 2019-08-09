import React from 'react'
import Item from './Item/Item';

import classes from './Nav.css';
function Nav() {

    return (
        <div className={classes.Nav}>
            <nav className={classes.Items}>
                <ul className={classes.Links}>
                    LinksToDisplay
                </ul>
            </nav>
        </div>
    )
}
export default Nav;
