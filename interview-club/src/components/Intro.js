import React from 'react';
import {Route, Link} from 'react-router-dom'

const Intro = props => {

    return (
        <div>
            <h1>Hey, job search is<h1 class="emphasize">painful?</h1> We got you</h1>
            <p class="one-line">Here The Interview Club is to help you to nail your <mark class="red">right</mark> job <mark class="red">faster</mark>.</p>
            <div class="btn">
                <Link to='/signup' class="make-btn"
                // onClick={props.history.push('/signup')}
                >Sign Up</Link>
                <Link to='/login' class="make-btn"
                // onClick={props.history.push('/login')}
                >Log In</Link>
            </div>
        </div>
    )
}

export default Intro